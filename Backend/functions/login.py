# Author: Casta-mere
from .constants import HEADERS, LOGIN_URL, DB_PATH, CREATE_DB
import sqlite3
import requests
import logging
import json
import time

logger = logging.getLogger("uvicorn") 

class LoginManager:

    def  __init__(self):
        self._create_table()
        self.account = None
        self.cookies = None
        self.loggedIn = False
        self._load_if_exists()

    def _get_conn(self):
        return sqlite3.connect(DB_PATH)

    def _create_table(self):
        with self._get_conn() as conn:
            conn.execute(CREATE_DB)

    def _load_if_exists(self):
        with self._get_conn() as conn:
            cur = conn.cursor()
            cur.execute("SELECT account, cookies_dict FROM cookies LIMIT 1")
            row = cur.fetchone()
            if row:
                self.account, cookies_str = row
                self.cookies = json.loads(cookies_str)
                if self._is_cookie_valid(self.cookies):
                    self.loggedIn = True
                else:
                    self.account = None
                    self.cookies = None

    def login(self, account: str, password: str):
        data = f"account={account}&password={password}&phoneAccountBindToken=undefined&thirdAccountBindToken=undefined"
        response = requests.post(LOGIN_URL, headers=HEADERS, data=data)
        logger.info(response.json())
        if response.status_code == 200:
            self.loggedIn = True
            self.account = account
            self.cookies = response.cookies.get_dict()
            self._save_cookies()
            self.get_user_info()
            return {"success": True, "cookies": self.cookies}
        return {"success": False, "status": response.status_code}

    def get_cookie(self, account: str):
        self.account = account
        self.cookies = self._load_cookies(account)
        if self.cookies and self._is_cookie_valid(self.cookies):
            return self.cookies
        return None
    
    def _is_cookie_valid(self, cookie):
        # TODO implement cookie check
        return True

    def _save_cookies(self):
        with self._get_conn() as conn:
           conn.execute(
                "REPLACE INTO cookies (account, cookies_dict, timestamp) VALUES (?, ?, ?)",
                (self.account, json.dumps(self.cookies), int(time.time()))
            )

    def _load_cookies(self, account: str):
        with self._get_conn() as conn:
            cur = conn.cursor()
            cur.execute("SELECT cookies_dict FROM cookies WHERE account = ?", (account))
            row = cur.fetchone()
            if row:
                return json.loads(row[0])
            return None
    
    def _is_loggedIn(self):
        return self.loggedIn

    def logout(self):
        with self._get_conn() as conn:
            conn.execute("DELETE FROM cookies WHERE account = ?", (self.account,))
        self.loggedIn = False
        self.account = None
        self.cookies = None

    def get_user_info(self):
        url = "https://user.allcpp.cn/rest/my"
        response = requests.get(url, headers=HEADERS, cookies=self.cookies)
        logger.info(response.json())


    # https://www.allcpp.cn/allcpp/loginregister/getUser/3705778.do
#     {
#     "result": {
#         "violationDescription": "",
#         "showType": 0,
#         "isFriend": 0,
#         "showFans": 1,
#         "circleList": [],
#         "showFollow": 1,
#         "userMain": {
#             "uid": 3705778,
#             "nickname": "castamerego",
#             "facePicId": 8897021,
#             "faceUrl": "https://imagecdn3.allcpp.cn/face/2025/5/a99f0bf2-4ee9-45c5-a68b-4d218c26f795",
#             "description": "",
#             "likedCount": 0,
#             "followCount": 1,
#             "circleId": 2807100,
#             "circleName": "castamerego的社团",
#             "isliked": 0,
#             "isHide": false,
#             "homePage": "",
#             "weibo": "",
#             "pixiv": "",
#             "lofter": "",
#             "telValidType": 1,
#             "pageType": 0,
#             "enabled": 2,
#             "userDegreeList": []
#         }
#     },
#     "message": "",
#     "isSuccess": true
# }