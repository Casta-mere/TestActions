'use client'
import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'


export default function Home() {
  const [account, setAccount] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8765/api/login')
        const data = await res.json()
        setIsLoggedIn(Boolean(data.loggedIn))
      } catch (error) {
        console.error('Error fetching login status:', error)
      }
    }

    fetchLoginStatus()
  }, [])

  const handleLogin = async () => {
    try {
      // console.log(account, password)
      const res = await fetch('http://127.0.0.1:8765/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ account, password }),
      })

      const data = await res.json()
      if (data.success) {
        setIsLoggedIn(true)
      } else {
        alert("登录失败")
      }
    } catch (error) {
      console.error("登录请求失败", error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("http://127.0.0.1:8765/api/logout", {
        method: 'POST'
      })
      const res = await fetch('http://127.0.0.1:8765/api/login')
      const data = await res.json()
      setIsLoggedIn(data.loggedIn)
    } catch (error) {
      console.error("登出失败", error)
    }
  }

  return <>
    {!isLoggedIn && <Dialog.Root>
      <Dialog.Trigger>
        <Button>登录</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>登录</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          登录你的 CPP 账号
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              账号
            </Text>
            <TextField.Root
              placeholder="电话/邮箱"
              onChange={(e) => setAccount(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              密码
            </Text>
            <TextField.Root
              placeholder="xxxx"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              取消
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleLogin}>登录</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
    }
    {isLoggedIn && <Dialog.Root>
      <Dialog.Trigger>
        <Button>登出</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>登出</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          退出登录你的 CPP 账号
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              取消
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleLogout}>登出</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
    }
  </>;
}
