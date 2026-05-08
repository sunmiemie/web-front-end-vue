# web-front-end-Vue

#### 介绍

**北清智创氢能监管大数据平台**

#### 软件架构

- 框架：**Vue2**

#### 环境依赖

- node.js
- vue

#### 安装教程

- 下载

  - ```
    git clone https://gitee.com/nevt/web-front-end-vue.git  <bqzc分支>
    ```

- 安装依赖

  - ```
    npm install
    ```

- 启动

  - ```
    npm run dev
    ```



#### 目录结构

```
├─build                 // 打包环境
│
├─config                // 开发部署配置
│
├─node_modules			//依赖模块
│
│
├─src                   // 项目源文件
│  │  main.js           // 入口文件
│  ├─api                // 请求接口
│  ├─assets             // 组件静态资源
│  │  └─css          	// 样式
|  |  └─fonts			// 字体
|  |  └─img				// 图片
|  |  └─js				// js
|  |  └─json			// json
|  |  └─svg				// svg图片
│  ├─components         // 业务组件
│  ├─view               // 页面组件
│  ├─router             // 路由管理
│
│  .babelrc             // babel配置
│  .editorconfig        // editor配置
│  .gitignore           // git忽略配置
│  .eslintrc.js         // eslint配置
│  .postcssrc.js        // postcss配置
│  index.html           // 项目首页
│  package.json         // 依赖配置
```



#### 使用说明

页面包含全链、制氢、运氢、加氢、燃料电池车和氢进万家看板。运行时通过现有的 `/api`、`/foton` 和 `/ws` 同源代理读取数据。

#### 离线回归测试

使用 Node.js 18 或更新版本执行：

```bash
npm test
```

测试使用 Node 内置测试运行器和 VM 模块执行真实源码，替换网络与浏览器对象，不连接业务后端。测试专用的 VM 模块标记会产生 Node 的实验性功能提示，不影响生产打包。

#### 构建

使用锁文件安装依赖后执行 `npm run build`。旧版 Webpack 3 在使用 OpenSSL 3 的 Node 版本上可能需要临时设置 `NODE_OPTIONS=--openssl-legacy-provider`。`static/` 存放无需打包转换的静态文件；请保留其中的占位文件，确保新克隆的仓库也能构建。
