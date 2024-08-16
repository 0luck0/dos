export default {
    title: '博客的标题', // 博客的标题
    description: '的个人博客', // 博客的介绍
    base: '/dos/', // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
    themeConfig: {
        logo: "/logo.svg", // 页面上显示的logo
        nav: [ // 页面右上角的导航
            {
                text: "前端",
                items: [
                    { text: '三剑客', link: '/articles/javaScript-core/构造函数、原型、原型链' },
                    { text: 'typescript', link: '/articles/libs/VForm3低代码初体验' },
                    { text: 'vue', link: '/articles/other/nvm管理node' },
                    { text: 'react', link: '/articles/other/nvm管理node' },
                    {
                        text: '3D', items: [
                            { text: 'webgl', link: '/articles/javaScript-core/构造函数、原型、原型链' },
                            { text: 'webgpu', link: '/articles/libs/VForm3低代码初体验' },
                            { text: 'Babylonjs', link: '/articles/other/nvm管理node' },
                            { text: 'Threejs', link: '/articles/other/nvm管理node' },
                            { text: 'WEBGIS', link: '/articles/other/nvm管理node' },
                        ]
                    },
                    { text: '2D', link: '/articles/other/nvm管理node' },
                ]
            },
            {
                text: "后端", items: [
                    { text: 'python', link: '/articles/javaScript-core/构造函数、原型、原型链' },
                    { text: 'c++', link: '/articles/libs/VForm3低代码初体验' },
                    { text: '.net', link: '/articles/other/nvm管理node' },
                    { text: 'golang', link: '/articles/other/nvm管理node' },
                    { text: 'rust', link: '/articles/other/nvm管理node' },
                ]
            },
            {
                text: '游戏',
                items: [ // 可以配置成下拉
                    { text: '虚幻引擎', link: '/articles/javaScript-core/构造函数、原型、原型链' },
                    { text: 'Godot', link: '/articles/libs/VForm3低代码初体验' },
                    { text: 'Babylonjs', link: '/articles/other/nvm管理node' },
                ]
            }
        ],
        sidebar: { // 侧边栏，可以分组
            "/articles/vue/": [
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
            "/articles/uniapp/": [
                {
                    text: "基础",
                    items: [
                    ],
                },
                {
                    text: "代码段",
                    items: [
                        {
                            text: "一键登录",
                            link: "/articles/uniapp/一键登录",
                        }
                    ],
                },
            ],
            "/articles/javaScript-core/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "1. 构造函数、原型、原型链",
                            link: "/articles/javaScript-core/构造函数、原型、原型链",
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
            "/articles/libs/": [
                {
                    items: [
                        {
                            text: "1. VForm3低代码初体验",
                            link: "/articles/libs/VForm3低代码初体验",
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

