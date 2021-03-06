import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout.jsx')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: 'Dashboard',
        icon: 'pie-chart',
        path: 'dashboard',
        children: [
          {
            name: '分析页',
            path: 'analysis',
            component: dynamicWrapper(app, [], () => import('../columns/index/Index.js')),
          },
          // {
          //   name: '监控页',
          //   path: 'monitor',
          //   component: dynamicWrapper(app, ['monitor'], () => import('../routes/Dashboard/Monitor')),
          // },
          // {
          //   name: '工作台',
          //   path: 'workplace',
          //   component: dynamicWrapper(app, ['project', 'activities', 'chart'], () => import('../routes/Dashboard/Workplace')),
          // },
        ],
      },
      {
        name: '业务管理',
        path: 'business',
        icon: 'global',
        children: [
          {
            name: '汽车销售',
            path: 'sell',
            component: dynamicWrapper(app, ['carpickerModel','carshowModel'], () => import('../components/carpicker/index.js')),
          },
          {
            name: '人员管理',
            path: 'person',
            component: dynamicWrapper(app, [], () => import('../columns/people/PeopleIndex.js')),
            // children: [
            //   {
            //     path: 'confirm',
            //     component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step2')),
            //   },
            //   {
            //     path: 'result',
            //     component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step3')),
            //   },
            // ],
          },
          {
            name: '订单管理',
            path: 'order',
            component: dynamicWrapper(app, [], () => import('../columns/order/OrderIndex.js')),
          },
        ],
      },
      // {
      //   name: '列表页',
      //   path: 'list',
      //   icon: 'table',
      //   children: [
      //     {
      //       name: '查询表格',
      //       path: 'table-list',
      //       component: dynamicWrapper(app, ['rule'], () => import('../routes/List/TableList')),
      //     },
      //     {
      //       name: '标准列表',
      //       path: 'basic-list',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/BasicList')),
      //     },
      //     {
      //       name: '卡片列表',
      //       path: 'card-list',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/CardList')),
      //     },
      //     {
      //       name: '搜索列表（项目）',
      //       path: 'cover-card-list',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/CoverCardList')),
      //     },
      //     {
      //       name: '搜索列表（应用）',
      //       path: 'filter-card-list',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/FilterCardList')),
      //     },
      //     {
      //       name: '搜索列表（文章）',
      //       path: 'search',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/SearchList')),
      //     },
      //   ],
      // },
      // {
      //   name: '详情页',
      //   path: 'profile',
      //   icon: 'profile',
      //   children: [
      //     {
      //       name: '基础详情页',
      //       path: 'basic',
      //       component: dynamicWrapper(app, ['profile'], () => import('../routes/Profile/BasicProfile')),
      //     },
      //     {
      //       name: '高级详情页',
      //       path: 'advanced',
      //       component: dynamicWrapper(app, ['profile'], () => import('../routes/Profile/AdvancedProfile')),
      //     },
      //   ],
      // },
      // {
      //   name: '结果',
      //   path: 'result',
      //   icon: 'check-circle-o',
      //   children: [
      //     {
      //       name: '成功',
      //       path: 'success',
      //       component: dynamicWrapper(app, [], () => import('../routes/Result/Success')),
      //     },
      //     {
      //       name: '失败',
      //       path: 'fail',
      //       component: dynamicWrapper(app, [], () => import('../routes/Result/Error')),
      //     },
      //   ],
      // },
      // {
      //   name: '异常',
      //   path: 'exception',
      //   icon: 'warning',
      //   children: [
      //     {
      //       name: '403',
      //       path: '403',
      //       component: dynamicWrapper(app, [], () => import('../routes/Exception/403')),
      //     },
      //     {
      //       name: '404',
      //       path: '404',
      //       component: dynamicWrapper(app, [], () => import('../routes/Exception/404')),
      //     },
      //     {
      //       name: '500',
      //       path: '500',
      //       component: dynamicWrapper(app, [], () => import('../routes/Exception/500')),
      //     },
      //   ],
      // },
    ],
  },
  {
    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout.jsx')),
    path: '/user',
    layout: 'UserLayout',
    children: [
      {
        name: '帐户',
        icon: 'user',
        path: 'user',
        children: [
          {
            name: '登录',
            path: 'login',
            component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login.js')),
          },
          {
            name: '注册',
            path: 'register',
            component: dynamicWrapper(app, ['regist'], () => import('../routes/User/Register.js')),
          },
          {
            name: '注册结果',
            path: 'register-result',
            component: dynamicWrapper(app, [], () => import('../routes/User/Registerresult.jsx')),
          },
        ],
      },
    ],
  }
];
