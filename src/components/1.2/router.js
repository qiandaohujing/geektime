import vmodel from "./index"
import {
  BaseRouter
} from "@/router/base"

const vmodelRouter = [
  new BaseRouter('/vmodel', vmodel, 'vmodel', '双向绑定与单向数据流')
]

export default vmodelRouter