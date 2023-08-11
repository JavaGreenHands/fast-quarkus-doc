const nav = require('./nav.js')
const sidebar = require('./sidebar.js')
module.exports = {
    title: 'Fast-Quarkus 文档',
    description: 'Just playing around',
    themeConfig: {
        // logo 配置
        logo: '/img/logo.jpg',
        nav,
        // 侧边栏配置
       sidebar,
    }
}