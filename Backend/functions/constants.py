# Author: Casta-mere

HEADERS = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,zh-TW;q=0.5,ja;q=0.4',
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'origin': 'https://cp.allcpp.cn',
    'priority': 'u=1, i',
    'referer': 'https://cp.allcpp.cn/',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0'
}
LOGIN_URL = "https://user.allcpp.cn/api/login/normal"
CREATE_DB = """CREATE TABLE IF NOT EXISTS cookies (
                    account TEXT PRIMARY KEY,
                    cookies_dict TEXT NOT NULL,
                    timestamp INTEGER
                )
            """
DB_PATH = ".cookies.db"