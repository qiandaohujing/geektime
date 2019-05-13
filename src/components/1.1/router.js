import login from "./login"
import {
  BaseRouter
} from "@/router/base"

const loginRouter = [
  new BaseRouter('/login', login, 'login', '登录')
]

export default loginRouter