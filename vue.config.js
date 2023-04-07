/*
 * @Author: yushuang
 * @Date: 2023-04-07 16:54:55
 * @LastEditors: yushuang
 * @LastEditTime: 2023-04-07 23:36:38
 * @Description:
 */
/**
 * 判断是否是生产环境
 * @returns {boolean} 是否是生产环境
 */
function isProd() {
  return process.env.NODE_ENV === 'production';
}

// 配置请求的基本API,当前开发模式配置的是淘宝的测试地址
process.env.VUE_APP_BASE_API = isProd() ? '' : 'http://rap2api.taobao.org/app/mock/115307/user';

module.exports = {
  publicPath: isProd() ? './' : '/', // 部署到生产环境时，按需修改前项为项目名称
  productionSourceMap: false, // 不需要生产环境的 source map，减少构建时间
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    client: {
      webSocketURL: 'ws://0.0.0.0:8081/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      /*
       * 当使用 title 选项时，
       * template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
       */
      title: '赣州',
      /*
       * 在这个页面中包含的块，默认情况下会包含
       * 提取出来的通用 chunk 和 vendor chunk。
       */
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },

  configureWebpack: (config) => {
  },
};
