export default {
    title: '博客的标题', // 博客的标题
    description: '的个人博客', // 博客的介绍
    base: '/dos/', // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
    themeConfig: {
        logo: "/logo.svg", // 页面上显示的logo
        nav: [ // 页面右上角的导航
            { text: "作品集", link: "/" },
            {
                text: "前端",
                items: [
                    { text: 'js', link: '/articles/forent/base' },
                    { text: 'typescript', link: '/articles/' },
                    { text: 'vue', link: '/articles/other/' },
                    { text: 'react', link: '/articles/' },
                    {
                        text: '3D', items: [
                            { text: 'Webgl', link: '/articles/' },
                            { text: 'Webgpu', link: '/articles/libs/' },
                            { text: 'Babylonjs', link: '/articles/other' },
                            { text: 'Threejs', link: '/articles/' },
                            { text: 'WEBGIS', link: '/articles/' },
                        ]
                    },
                    {
                        text: '2D', items: [
                            { text: 'canvas', link: '/articles/' },
                            { text: 'svg', link: '/articles/' },
                            { text: 'echart', link: '/articles/' },
                            { text: 'antv', link: '/articles/' },

                        ]
                    },
                ]
            },
            {
                text: "后端", items: [
                    { text: 'python', link: '/articles/' },
                    { text: 'c++', link: '/articles/' },
                    { text: '.net', link: '/articles/' },
                    { text: 'golang', link: '/articles/' },
                    { text: 'rust', link: '/articles/' },
                ]
            },
            {
                text: '游戏开发',

                items: [ // 可以配置成下拉
                    {
                        text: '游戏引擎', items: [ // 可以配置成下拉
                            { text: '虚幻引擎', link: '/articles/' },
                            { text: 'Godot', link: '/articles/' },
                            { text: 'Babylonjs', link: '/articles/' },
                        ]
                    },
                    { text: '建模动画', link: '/articles/' },
                    { text: '游戏设计基础', link: '/articles/' },
                ]
            },
            {
                text: '数字孪生',
                items: [
                    {
                        text: '工业',
                        items: [
                            { text: '智慧园区', link: '/articles/' },
                            { text: '智慧工厂', link: '/articles/' },

                        ]
                    },
                    { text: '建筑', link: '/articles/' },

                ]
            }
        ],
        sidebar: { // 侧边栏，可以分组
            "/articles/back/": [
                {
                    text: "基础",
                    items: [
                    ],
                },
                {
                    text: "代码段",
                    items: [
                        {
                            text: "上传素材到COS",
                            link: "/articles/vue/上传素材到COS",
                        },
                        {
                            text: "文件下载",
                            link: "/articles/vue/文件下载",
                        },
                    ],
                },
            ],
            "/articles/forent/": [
                {
                    text: "js",
                    items: [
                    ],
                },
                {
                    text: "typescript",
                    items: [
                        {
                            text: "语法",
                            link: "/articles/uniapp/一键登录",
                        }
                    ],
                },
            ],
            "/articles/game/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "1. 构造函数、原型、原型链",
                            link: "/articles/",
                        },
                        {
                            text: "2. 执行上下文和执行上下文栈",
                            link: "/articles/javaScript-core/执行上下文和执行上下文栈",
                        },
                        {
                            text: "3. this的指向",
                            link: "/articles/javaScript-core/this的指向",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/articles/dt/": [
                {
                    items: [
                        {
                            text: "1. VForm3低代码初体验",
                            link: "/articles/",
                        },
                    ],
                }
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/0luck0" }], // 可以连接到 github
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },

    },
    head: [
        // 配置网站的图标（显示在浏览器的 tab 上）
        ["link", { rel: "icon", type: "image/svg+xml", href: `logo.svg` }],
    ],
}

