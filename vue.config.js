const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.join(__dirname, 'src/styles')]
      },
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'v-[name]'
    })
  }
}