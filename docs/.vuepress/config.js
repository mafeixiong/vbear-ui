module.exports = {
  base: '/vbear-ui/',
  title: 'vbear',
  description: '一个基于vue的ui框架',
  themeConfig: {
    smoothScroll: true,
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/install/'},
      {text: 'Github', link: 'https://github.com/mafeixiong'},
    ],
    sidebar: [
      '/',
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
        ],
      },

    ],
  },
}