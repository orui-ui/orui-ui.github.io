import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'orui-ui',
  favicon: 'https://foruda.gitee.com/avatar/1668427357754256928/10923655_orui-ui_1668427357.png!avatar100',
  logo: 'https://foruda.gitee.com/avatar/1668427357754256928/10923655_orui-ui_1668427357.png!avatar100',
  locales: [['zh-CN', '中文'], ['en-US', 'English']],
  outputPath: 'docs-dist',
  mode: 'site',
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      // skipPropsWithName: ['autoFocus', 'form', 'formAction', 'formEncType', 'title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  history: {
    type: 'hash',
  },
  navs: {
    'zh-CN': [
      {
        title: '指南',
        path: '/guide'
      },{
        title: '组件',
        path: '/components'
      },{
        title: 'Github',
        path: 'https://github.com/orui-ui/orui-ui.github.io/tree/master'
      },{
        title: 'Gitee',
        path: 'https://gitee.com/orui-ui/orui-ui'
      }
    ],
    'en-US': [
      {
        title: 'guide',
        path: '/guide'
      },{
        title: 'components',
        path: '/components'
      },{
        title: 'Github',
        path: 'https://github.com/orui-ui/orui-ui.github.io/tree/master'
      },{
        title: 'Gitee',
        path: 'https://gitee.com/orui-ui/orui-ui'
      }
    ]
  },
  // styles: [style],
  themeConfig: {
    carrier: 'orui-ui', // 设备状态栏左侧的文本内容
    hd: true,
  }
  // more config: https://d.umijs.org/config
});
