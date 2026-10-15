import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'iOS 技术笔记',
  description: '前端 iOS 开发个人技术分享',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目复盘', link: '/projects/' },
      { text: '架构设计', link: '/architecture/' },
      { text: '性能优化', link: '/performance/' },
      { text: 'SwiftUI', link: '/swiftui/' },
      { text: '面试整理', link: '/interview/' },
      { text: '关于我', link: '/about' },
    ],
    sidebar: {
      '/projects/': [
        { text: '项目列表', link: '/projects/' },
        { text: '示例项目复盘', link: '/projects/example-app' },
      ],
      '/architecture/': [
        { text: '架构总览', link: '/architecture/' },
        { text: 'MVVM 实践', link: '/architecture/mvvm-pattern' },
      ],
      '/performance/': [
        { text: '性能优化目录', link: '/performance/' },
        { text: 'TableView 优化', link: '/performance/tableview-optimize' },
      ],
      '/swiftui/': [
        { text: 'SwiftUI 目录', link: '/swiftui/' },
        { text: 'State 与 Binding', link: '/swiftui/state-and-binding' },
      ],
      '/interview/': [
        { text: '面试目录', link: '/interview/' },
        { text: '常见问题整理', link: '/interview/common-questions' },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname' },
    ],
  },
})
