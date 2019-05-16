module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: { // 配置跨域
      '/api': {
        //要访问的跨域的api的域名
        // target: 'http://127.0.0.1:9000/',
        target: 'https://www.easy-mock.com/mock/5c34a1dd571e3a7876576640/example',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}