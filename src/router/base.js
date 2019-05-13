export class BaseRouter {
  component
  path
  meta
  name
  constructor(path, component, name, title) {
      this.component = component
      this.path = path
      this.name = name
      this.meta = { title }
  }
}
