import Layout from '@/layout'

const testRouter = {
    path: '/test',
    name: '测试',
    component: Layout,
    meta: {
        title: '功能测试',
        icon: 'chart'
    },
    children: [
        {
            path: 'modal',
            component: () => import('@/views/modal'),
            meta: { title: '弹出框', noCache: true }
        },
        {
            path: 'table',
            component: () => import('@/views/table'),
            meta: { title: '表格', noCache: true }
        }
    ]
};

export default testRouter;