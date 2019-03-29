module.exports = {
  title: 'VuePress-NetlifyCMS',
  description: 'A VuePress Site Deployed on Netlify.com by Demo Macro',
  dest: 'pages',
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Projects',
        items: [
          { text: 'URLStack', link: 'https://abc.imst.xyz' },
          { text: 'Hexo-NetlifyCMS', link: 'https://hexocms.imst.xyz' },
          { text: 'Gitbook-NetlifyCMS', link: 'https://gitbook.imst.xyz' }
        ]
      },
      { text: 'About', link: 'about.md' },
      { text: 'Admin', link: 'https://vuepress.imst.xyz/admin/' }
    ],

    sidebar: 'auto',
    sidebar: [
      ['/', 'Home'],
      ['docs/', 'Documents']
    ],

    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: true, // 默认值：true
    lastUpdated: 'Last Updated', // string | boolean

    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },


    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'DemoMacro/VuePress-NetlifyCMS',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'DemoMacro/VueCMS',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}
