module.exports = [
    {
        title: '快速开始',   // 必要的
        path: '/guide/guide',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            {
                title: '简介',   // 必要的
                path: '/guide/env',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1

            },
            {
                title: '快速了解',   // 必要的
                path: '/guide/env',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1

            },
            {
                title: '服务端开发环境搭建',   // 必要的
                path: '/guide/env',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '开发环境综述',   // 必要的
                        path: '/guide/env',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    }
                ]
            },
            {
                title: '部署手册',   // 必要的
                path: '/guide/env',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '服务端部署手册',   // 必要的
                        path: '/guide/env',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: 'WEB端部署手册',   // 必要的
                        path: '/guide/env',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    }
                ]
            }
        ]
    }
]
