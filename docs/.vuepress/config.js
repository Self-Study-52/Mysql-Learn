module.exports = {
  // 设置base路径
  base: "/Mysql-Learn/",
  // 设置右上角标题
  title: "Mysql",
  // 会生成 meta 标签
  description: "Mysql 必会知识点",
  // head文件配置
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],
  // markdown 文件说明
  markdown: {
    lineNumbers: 4,
  },
  // 主题
  theme: "@vuepress/default",
  // 主题配置
  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/92788671?s=200&v=4",
    docsDir: "docs",
    sidebar: {
      collapsable: false,
      "/guide/": require("./sidebar"),
    },

    // page meta
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",

    // custom containers
    tip: "提示",
    warning: "注意",
    danger: "警告",

    // 404 page
    notFound: [
      "这里什么都没有",
      "我们怎么到这来了？",
      "这是一个 404 页面",
      "看起来我们进入了错误的链接",
    ],
    backToHome: "返回首页",

    // a11y
    openInNewWindow: "在新窗口打开",
    toggleDarkMode: "切换夜间模式",
    toggleSidebar: "切换侧边栏",
  },
};
