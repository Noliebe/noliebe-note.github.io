import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "朱科羽的笔记",
  description: "放弃幻想, 准备斗争",
  // srcDir: '../z-n-morgan-book/行囊/web学记',
  // srcDir: '../../z-n-morgan-book/行囊/英语',
  srcExclude: ['**/README.md', '**/TODO.md'],
  outDir: '../docs',
  base: '/noliebe-note.github.io', 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
