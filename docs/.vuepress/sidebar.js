module.exports = [
    {
        title: '快速开始',   // 必要的
        path: '/guide/quickstart',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            {
                title: '简介',   // 必要的
                path: '/guide/introduction',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1

            },
            {
                title: '开发环境搭建',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '服务端',   // 必要的
                        path: '/guide/serverenv',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: '前端',   // 必要的
                        path: '/guide/webenv',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                ]
            },
            {
                title: '服务端开发',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '上传下载',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: '静态资源支持',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: '权限控制',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            {
                                title: '方式1',   // 必要的
                                path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                                collapsable: false, // 可选的, 默认值是 true,
                                sidebarDepth: 1,    // 可选的, 默认值是 1
        
                            }
                        ]

                    },
                    {
                        title: '增删改查支持',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: '统一异常支持',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: '操作日志记录',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: 'restClient使用',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: '熔断支持',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: 'Redis 集成',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: 'ElasticSearch 集成',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: 'Kafka 集成',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: '定时任务集成',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: '问题排查指南',   // 必要的
                        path: '/guide/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                ]
            },
            {
                title: '前端开发',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1   // 可选的, 默认值是 1
            },
            {
                title: '部署手册',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '服务端部署手册',   // 必要的
                        path: '/guide/serverdeploy',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    },
                    {
                        title: 'WEB端部署手册',   // 必要的
                        path: '/guide/webdeploy',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1

                    }
                ]
            }
        ]
    }
]
