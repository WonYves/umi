import { defineConfig } from 'umi';

export default defineConfig({
  history:{ type : 'browser'},
  // history:{ type : 'hash'},
  nodeModulesTransform: {
    type: 'none',
  },
  // 声明式路由 
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  proxy: {
    '/api': {
      'target': 'https://i.maoyan.com',
      'changeOrigin': true,
    },
  },
});
