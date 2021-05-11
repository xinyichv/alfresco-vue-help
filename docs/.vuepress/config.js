const moment = require('moment');

module.exports = {
  title: 'Alfresco-Vue',
  description: 'Alfresco-Vue低代码开发框架',
  head: [
    ['link', { name: 'icon', content: '/favicon.ico' }],
    ['meta', { name: 'author', content: '凌云文档' }],
    ['meta', { name: 'keyrowds', content: 'Alfresco Vue 低代码开发框架 文档管理 ECM 企业内容管理' }]
  ],
  themeConfig: {
    logo: '/assets/img/hero.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/tutorials' },
      { text: '使用手册', link: '/guide/' },
      { 
        text: '扩展指南',
        items: [
          {
            text: 'Alfresco',
            items: [
              { text: '已有API', link: '/develop/alfresco/api' },
              { text: '扩展API', link: '/develop/alfresco/extension' },
              { text: 'JavaScript API', link: '/develop/alfresco/jsapi' }
            ]
          },
          {
            text: 'Vue',
            items: [
              { text: '已有组件', link: '/develop/vue/component' },
              { text: '自定义组件', link: '/develop/vue/extension' }
            ]
          }
        ] 
      },
      { text: '关于我们', link: '/about/' },
      { 
        text: '链接',
        items: [
          { text: 'Alfresco', link: 'https://www.alfresco.com' },
          { text: 'Vue', link: 'https://cn.vuejs.org' },
          { text: 'Leencloud', link: 'https://www.leencloud.com' }
        ]
      },
    ],
    sidebar: 'auto',
    lastUpdated: '更新时间'
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          moment.locale('zh-cn')
          return moment(timestamp).format('LLLL')
        }
      }
    ]
  ]
}