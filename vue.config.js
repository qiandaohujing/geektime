module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.196:8080',
        ws: true,
        changeOrigion: true
      }
    }
  }
}