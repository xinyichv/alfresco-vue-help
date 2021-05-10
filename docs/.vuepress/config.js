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
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { 
        text: 'External',
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