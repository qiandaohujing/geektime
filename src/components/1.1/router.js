import vslot from "./index"
import {
  BaseRouter
} from "@/router/base"

const vslotRouter = [
  new BaseRouter('/vslot', vslot, 'vslot', '登录')
]

export default vslotRouter