import vwatch from './watch'
import {
  BaseRouter
} from '../../router/base'

const vwatchRouter = [
  new BaseRouter('/vwatch', vwatch, 'vwatch', 'watch与computed')
]

export default vwatchRouter