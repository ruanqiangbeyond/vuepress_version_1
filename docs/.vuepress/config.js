module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        // 禁用导航
        // navbar: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: '开源网站',
                items: [
                    { text: 'vue', link: 'https://router.vuejs.org/zh/guide/#javascript' },
                    { text: 'vuepress', link: 'https://vuepress.vuejs.org/zh/guide/getting-started.html' },
                    { text: 'pinia', link: 'https://pinia.vuejs.org/' },
                    { text: 'pinia', link: 'https://pinia.vuejs.org/' },
                ]
            },
            { text: 'External', link: 'https://www.baidu.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        displayAllHeaders: true,
        sidebarDepth: 5,
        sidebar: 'auto'
    }
}