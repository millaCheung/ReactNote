# React

# 1. React 入门

### 1.1. React 入门

#### 1.1.1. 官网

1. 英文官网
2. 中文官网

#### 1.1.2. 介绍描述

1. 用于动态构建用户界面的 JavaScript 库（只关注视图）
2. 由 Facebook 开源

#### 1.1.3. React 的特点

1. 声明式编程
2. 组件化编程
3. React Native 编写原生应用
4. 高效（优秀的 Diffing 算法）

#### 1.1.4. React 高效的原因

1. 使用虚拟（victual）DOM，不总是直接操作页面真实 DOM
2. DOM Diffing 算法，最小化页面绘制

### 1.2. React 的基本使用

#### 1.2.1. 效果

#### 1.2.2. 相关 js 库

1. react.js：React 核心库
2. react-dom.js：提供操作 DOM 的 react 扩展库
3. babel.min.js：解析 JSX 语法代码转为 JS 代码的库

#### 1.2.3. 创建虚拟 DOM 的两种方式

1. 纯 JS 方式（一般不用）
2. JSX 方式

#### 1.2.4. 虚拟 DOM 和 真实 DOM

### 1.3. JSX

#### 1.3.1. 效果

#### 1.3.2. JSX

1. 全称：JavaScript XML
2. react 定义的一种类似于 XML 的 JS 扩展语法：JS + XML
3. 本质是 React.createElement(component, props, ...children) 方法的语法糖
4. 作用：用来简化创建虚拟 DOM
   - 写法：`var ele = <h1>Hello JSX!</h1>`
   - 注意1：它不是字符串，也不是 HTML/XML 标签
   - 注意2：它最终产生的就是一个 JS 对象
5. 标签名任意：HTML 标签或其它标签 

#### 1.3.3. 渲染虚拟 DOM 元素

#### 1.3.4. JSX 练习

### 1.4. 模块与组件和模块化与组件化的理解

#### 1.4.1. 模块

1. 理解：向外提供特定功能的 js 程序，一般就是一个 js 文件
2. 为什么：js 代码更多更复杂
3. 作用：复用 js ，简化 js 的编写，提高 js 运行效率

#### 1.4.2. 组件

1. 理解：用来实现局部功能效果的代码和资源的集合（html/css/js/image 等）
2. 为什么：一个界面的功能更复杂
3. 作用：复用编码，简化项目编码，提高运行效率

#### 1.4.3. 模块化

当应用的 js 都以模块来编写的，这个应用就是一个模块化的应用

#### 1.4.4. 组件化

当应用是以组件的方式实现，这个应用就是一个组件化的应用

# 2. React 面向组件编程

## 2.1. 基本理解和使用

#### 2.1.1. 使用 React 开发者工具调试

#### 2.1.2. 效果

- 函数式组件：适用于简单组件的定义
- 类式组件：适用于复杂组件的定义

### 2.2. 组件实例三大核心属性1：state

#### 2.2.1. 效果

#### 2.2.2. 理解

1. state 是组件对象最重要的属性，值是对象（可以包含多个 key-value 的组合）
2. 组件被称为“状态机”，通过更新组件的 state 来更新对应的页面显示（重新渲染组件）

#### 2.2.3. 强烈注意

1. 组件中的 render 方法中的 this 为组件实例对象
2. 组件自定义的方法中 this 为 undefined，如何解决？
   - 强制绑定 this：通过函数对象的 bind()
   - 箭头函数
3. 状态数据，不能直接修改或更新

### 2.3. 组件三大核心属性2：props

#### 2.3.1. 效果

需求：自定义用来显示一个人员信息的组件

1. 姓名必须指定，且为字符串类型；
2. 性别为字符串类型，如果性别没有指定，默认为男；
3. 年龄必须指定，且为数字类型。

#### 2.3.2. 理解

1. 每个组件对象会有 props（properties 的简写）属性
2. 组件标签的所有属性都保存在 props 中

#### 2.3.3. 作用

1. 通过标签属性从组件外向组件内传递变化的数据
2. 注意：组件内部不要修改 props 数据

#### 2.3.4.  编码操作

1. 内部读取某个属性值

   `this.props.name`

2. 对 props 中的属性值进行类型限制和必要性限制

   - 第一种方式

     ```javascript
     Person.protoTypes = {
         name: React.ProtoTypes.string.isRequired,
         age: React.ProtoTypes.number
     }
     ```

   - 第二种方式（新）：

     使用 prop-types 库进行限制（需要引入 prop-types 库）

     ```javascript
     Person.protoTypes = {
         name: ProtoTypes.string.isRequired,
         age: ProtoTypes.number
     }
     ```

3. 扩展属性：将对象的所有属性通过 props 传递

   ```javascript
   <Person {...person}>
   ```

4. 默认属性值

   ```javascript
   Person.defaultProps = {
       age: 18,
       sex: '男'
   }
   ```

5. 组件类的构造函数

   ```javascript
   constructor(props) {
       super(props);
       console.log(props); // 打印所有属性
   }
   ```

### 2.4. 组件的三大属性3：refs 与事件处理

 #### 2.4.1. 效果

#### 2.4.2. 理解

组件内的标签可以定义 ref 属性来标识自己

#### 2.4.3. 编码

1. 字符串形式的 ref

   `<input ref="input1" />`

2. 回调形式的 ref

   `<input ref={(c)=>{this.input1 = c}} />`

3. createRef 创建 ref 容器

   ```shell
   myRef = React.createRef()
   <input ref={this.myRef} />
   ```

#### 2.4.4. 事件处理

1. 通过 onXxx 属性指定事件处理函数（注意大小写）
   - React 使用的是自定义（合成）事件，而不是使用的原生 DOM 事件
   - React 中的事件是通过事件委托方式处理的（委托给组件最外层的元素）
2. 通过 event.target 得到发生事件的 DOM 元素对象

### 2.5. 收集表单事件

#### 2.5.1. 效果

#### 2.5.2. 理解

包含表单的组件分类

- 受控组件
- 非受控组件

### 2.6. 组件声明周期

#### 2.6.1. 效果

#### 2.6.2. 理解

1. 组件对象从创建到死亡它会经历特定阶段
2. React 组件对象包含一系列钩子函数（生命周期回调函数），在特定的时刻使用
3. 我们在定义组件时，在特定的生命周期回调函数中做特定的工作。

#### 2.6.3. 生命周期函数流程图（旧）

生命周期的三个阶段（旧）

1. 初始化阶段：由 ReactDOM.render() 触发 —— 初次渲染
   - constructor()
   - componentWillMount()
   - render()
   - componentDidMount()
2. 更新阶段：由组件内部 this.setState() 或父组件重新 render 触发
   - shouldComponentUpdate()
   - componentWillUpdate()
   - render()
   - componentDidUpdate()
3. 卸载组件：由 React.unmountComponentAtNode() 触发
   - componentWillUnmount()

#### 2.6.4. 生命周期流程图（新）

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200702115139495.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTE3NDgzMTk=,size_16,color_FFFFFF,t_70)

生命周期的三个阶段（新）

1. 初始化阶段：由 ReactDOM.render() 触发 —— 初次渲染

   - constructor()
   - getDerivedStateFromProps()
   - render()
   - componentDidMount()

2. 更新阶段：由组件内部 this.setState() 或父组件重新 render 触发

   - getDerivedStateFromProps()
   - shouldComponentUpdate()

   - render()
   - getSnapshotBeforeUpdate()
   - componentDidUpdate()

3. 卸载组件：由 React.unmountComponentAtNode() 触发

   - componentWillUnmount()

#### 2.6.5. 重要的钩子

1. render：初始化渲染或更新渲染调用
2. componentDidMount：开启监听，发送 ajax 请求
3. componentWillUnmount：做一些收尾工作，如：清理定时器

#### 2.6.6. 即将废弃的钩子

1. componentWillMount
2. componentWillReceiveProps
3. componentWillUpdate

现在使用会出现警告，下一个版本需要加上 UNSAFE_ 前缀才能使用，以后可能会被彻底废弃，不建议使用

### 2.7. 虚拟 DOM 与 DOM Diffing 算法

#### 2.7.1. 效果

## 3. React 应用（基于 react 脚手架）

### 3.1. 使用 create-react-app 创建 react 应用

#### 3.1.1. react 脚手架

1. xxx 脚手架：用来帮助程序员快速创建一个基于 xxx 库的模板项目
   - 包含了所有需要的配置（语法检查、jsx 编译，devServer...）
   - 下载好了所有相关的依赖
   - 可以直接运行一个简单效果
2. react 提供了一个用于创建 react 项目的脚手架：create-react-app
3. 项目的整体技术架构为：react + webpack + es6 + eslint
4. 使用脚手架开发的项目的特点：模块化、组件化、工程化

#### 3.1.2. 创建项目并启动

1. 全局安装：`npm install -g create-react-app`
2. 切换到想创建的目录，使用命令：`create-react-app hello-react`
3. 进入项目文件夹：`cd hello-react`
4. 启动项目：`npm start`

#### 3.1.3. react 脚手架项目结构

```
public -- 静态资源文件夹
	favicon.icon -- 网站页签标签
	index.html -- 主网页
	logo192.png -- logo 图
	logo512.png -- logo 图
	manifest.json -- 应用加壳的配置文件
	robots.txt -- 爬虫协议文件
	
src -- 源码文件夹
	App.css -- App 组件的样式
	APP.js -- App 组件
	App.test.js -- 用于给 App 做测试
	index.css -- 样式
	index.js -- 入口文件
	logo.svg -- logo 图
	reportWebVitals.js -- 页面性能分析文件（需要 web-vitals 库的支持）
	setupTest.js -- 组件单元测试的文件（需要 jest-dom 库的支持）
```

#### 3.1.4. 功能界面的组件化编码流程

1. 拆分组件：拆分界面，抽取组件
2. 实现静态组件：使用组件实现静态页面效果
3. 实现动态组件
   - 动态显示初始化数据
     - 数据类型
     - 数据名称
     - 保存在哪个组件
   - 交互（从绑定事件监听开始）

### 3.2. 组件的组合使用 - TodoList

1. 拆分组件、实现静态组件。注意：className、style 的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的 state 中？
   - 某个组件使用：放在自身 state 中
   - 某些组件使用：放在它们共同的父组件 state 中（官方称此操作为：状态提升）
3. 关于父子之间通信：
   - 父组件给子组件传递数据：通过 props 传递
   - 子组件给父组件传递数据：通过 props 传递，要求父提前给子传递一个函数
4. 注意 defaultChecked 和 checked 的区别，类似的还有：defaultValue 和 value
5. 状态在哪里，操作状态的方法就在哪里

## 4. React Ajax

### 4.1. 理解

#### 4.1.1. 前置说明

1. React  本身只关注界面，并不包含发送 ajax 请求的代码
2. 前端应用需要通过 ajax 请求与后台进行交互（json 数据）
3. react 应用中需要继承第三方 ajax 库（或自己封装）

#### 4.1.2. 常用的 ajax 请求库

1. jQuery：比较重，如果需要另外引入不建议使用
2. axios：轻量级，建议使用
   - 封装 XmlHTTPRequest 对象的 ajax
   - promise 风格
   - 可以在浏览器和 node 服务器端

### 4.2. axios

#### 4.2.1. 文档

http://www.axios-js.com/

#### 4.2.2. 相关 API

1. get 请求
2. post 请求

### 4.3. 案例——github 用户搜索

#### 4.3.1. 效果

### 4.4. 消息订阅-发布机制

1. 工具库：PubSubJS
2. 下载：`npm install pubsub-js --save`
3. 使用：
   - `import PubSub from 'pubsub-js'` // 引入
   - `PubSub.subscribe('delete', function(data){});` // 订阅
   - `PubSub.publish('delete', data)` // 发布消息

### 4.5. 扩展：Fetch

#### 4.5.1. 文档

https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch

#### 4.5.2. 特点

1. fetch：原生函数，不再使用 XmlHttpRequest 对象提交 ajax 请求
2. 老版本浏览器可能不支持

#### 4.5.3. 相关 API

1. GET请求

   ```javascript
   fetch(url).then(function(response) {
       return response.json()
   }).then(function(data) {
       console.log(data)
   }).catch(function(e) {
       console.log(e)
   })
   ```

   

## 5. React Router

### 5.1. 相关理解

#### 5.1.1. SPA 的理解

1. 单页 WEB 应用（Single page application，SPA）
2. 整个应用只有一个完整的页面
3. 点击页面中的链接不会刷新页面，只会做页面的局部更新
4. 数据都需要通过 ajax 请求获取，并在前端异步展示

#### 5.1.2. 路由的理解

1. 什么是路由？
   - 一个路由就是一个映射关系（key:value）
   - key 为路径，value 可能是 function 或 component
2. 路由分类
   - 后端路由：
     - 理解：value 是 function，用来处理客户端提交的请求
     - 注册路由：`router.get(path, function(req, res))`
     - 工作过程：当 node 接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应数据
   - 前端路由：
     - 浏览器端路由，value 是 component，用于展示页面内容
     - 注册路由：`<Router path="/test" component={Test}>`
     - 工作过程：当浏览器的 path 变为 /test 时，当前路由组件就会变为 Test 组件

#### 5.1.3. react-router-dom 的理解

1. react 是一个插件库
2. 专门用来实现一个 SPA 应用
3. 基于 react 的项目基本都会用到此库

### 5.2. react-router 相关 API

#### 5.2.1. 内置组件

1. `<BrowserRouter>`
2. `<HashRouter>`
3. `<Router>`
4. `<Redirect>`
5. `<Link>`
6. `<NavLink>`
7. `<Switch>`

#### 5.2.2. 其它

1. history 对象
2. match 对象
3. withRouter 函数

### 5.3. 基本路由使用

#### 5.3.1. 效果

#### 5.3.2. 准备

1. 下载 `react-router-dom: npm install --save react-router-dom`
2. 引入 `bootstrap.css: <link rel="stylesheet" href="/css/bootstrap.css">`

#### 5.3.3. 路由组件与一般组件

1. 写法不同

   - 一般组件：`<Demo/>`
   - 路由组件：`<Route path="/demo" component={Demo}/>`

2. 存放位置不同：

   - 一般组件：components
   - 路由组件：pages

3. 接收到的 props 不同：

   - 一般组件：需组件标签，传递什么，收到什么

   - 路由组件：接收到三个固定的属性

     ```js
     history:
         go: ƒ go(n)
         goBack: ƒ goBack()
         goForward: ƒ goForward()
         push: ƒ push(path, state)
         replace: ƒ replace(path, state)
     location:
         pathname: "/about"
         search: ""
         state: undefined
     match:
         params: {}
         path: "/about"
         url: "/about"
     ```

#### 5.3.4. NavLink 与封装 NavLink

1. NavLink 可以实现路由链接的高亮，通过 activeClassName 指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过 this.props.children 可以获取标签体内容

#### 5.3.5. Switch 的使用

1. 通常情况下，path 和 compoent 是一一对应的关系
2. Switch 可以提高路由匹配效率（单一匹配）

#### 5.3.6. 解决多级路径刷新页面样式丢失的问题

1. public/index.html 中引入样式时不写 ./ 写 /（常用）
2. public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL%/（常用）
3. 使用 HashRouter

#### 5.3.7. 路由的严格匹配和模糊匹配

1. 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
2. 开启严格匹配：`<Router exact={true} path="/about" component={About}/>`
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

#### 5.3.8. Redirect 的使用

1. 一般写在所有路由注册的最下方，当所有的路由都无法进行匹配时，跳转到 Redirect 指定的路由

2. 具体编码：

   ```jsx
   <Switch>
       <Route exact path="/about" component={About}/>
       <Route exact path="/home" component={Home}/>
       <Redirect to="/about"/>
   </Switch>
   ```

### 5.4. 嵌套路由使用

1. 注册子路由时要写上父路由的 path 值
2. 路由的匹配是按照注册路由的顺序进行的

### 5.5. 向路由组件传递参数数据

1. params 参数
   - 路由链接（携带参数）：`<Link to="/demo/test/tom/18">详情</Link>`
   - 注册路由（声明接收）：`<Route path="/demo/test/:name/:age" component={Test}/>`
   - 接收参数：`const {name, age} = this.props.match.params`
2. search 参数
   - 路由链接（携带参数）：`<Link to="/demo/test?name=tom&age=18">详情</Link>`
   - 注册路由（无需声明，正常注册即可）：`<Route path="/demo/test" component={Test}/>`
   - 接收参数：`const {search} = this.props.location`
   - 备注：获取到的 search 是 urlencoded 编码字符串，需要借助 querystring 解析
3. state 参数
   - 路由链接（携带参数）：`<Link to={{pathname: '/demo/test', state: {name: 'tom', age: 18}}}>详情</Link>`
   - 注册路由（无需声明，正常注册即可）：`<Route path="/demo/test" component={Test}/>`
   - 接收参数：`const {name, age} = this.props.state`
   - 备注：刷新课保留住参数 

### 5.6. 编程式路由导航

- 借助 `this.props.history` 对象上的 API 对操作路由跳转、前进、后退
  - `this.props.history.push()`
  - `this.props.history.replace()`
  - `this.props.history.goBack()`
  - `this.props.history.goForward()`
  - `this.props.history.go()`

### 5.7. BrowserRouter 与 HashRouter 的区别

1. 底层原理不同：
   - BrowserRouter 使用的是 H5 的 history API，不兼容 IE9 及以下版本
   - HashRouter 使用的是 URL 的哈希值
2. path 表现形式不同
   - BrowserRouter 的路径中没有 #，例如：`localhost:3000/demo/test`
   - HashRouter 的路径中包含 #，例如：`localhost:3000/#/demo/test`
3. 刷新后对路由 state 参数的影响
   - BrowserRouter 没有任何影响，因为 state 保存在 history 对象中
   - HashBroswer 刷新后会导致路由 state 参数的丢失
4. 备注：HashRouter 可以用于解决一些路径错误相关的问题

## 6. React UI 组件库

### 6.1. 流行的开源 React UI 组件库

#### 6.1.1. material-ui（国外）

1. 官网：`https://material-ui.com/zh/`
2. github：`https://github.com/mui-org/material-ui`

#### 6.1.2. ant-design（国外蚂蚁金服）

1. 官网：`https://ant.design/docs/react/introduce-cn`
2. github：`https://github.com/ant-design/ant-design/`

#### 6.1.3. antd 的按需引入 + 自定义主题

1. 安装依赖：`npm i react-app-rewired customize-cra babel-plugin-import less less-loader`，`less-loader` 版本不超过 8.x

2. 修改 `package.json`

   ```json
   ...
   "scripts": {
       "start": "react-app-rewired start",
       "build": "react-app-rewired build",
       "test": "react-app-rewired test",
       "eject": "react-scripts eject"
   },
   ...
   ```

3. 根目录下创建 `config-overrides.js`

   ```js
   const { override, fixBabelImports, addLessLoader } = require('customize-cra');
   
   module.exports = override(
       fixBabelImports('import', {
           libraryName: 'antd',
           libraryDirectory: 'es',
           style: true,
       }),
       addLessLoader({
           lessOptions: {
               modifyVars: { '@primary-color': '#1DA57A' },
               javascriptEnabled: true,
           },
       }),
   );
   ```

4. 备注：不用在组件里亲自引入样式了，即：`import 'antd/dist/antd.css'` 应该删除

## 7. Redux

### 7.1. Redux 理解

#### 7.1.1. 学习文档

1. 英文文档：https://redux.js.org/
2. 中文文档：https://www.cntofu.com/book/4/index.html
3. github：https://github.com/reduxjs/redux

#### 7.1.2. redux 是什么

1. redux 是一个专门用于做状态管理的 js 库（不是 react 插件库）
2. 它可以用在 react，angular，vue 等项目中，但基本与 react 配合使用
3. 作用：集中式管理 react 应用中多个组件共享的状态

#### 7.1.3. 什么情况下需要使用 redux

1. 某个组件的状态，需要让其它组件可以随时拿到（共享）
2. 一个组件需要改变另一个组件的状态（通信）
3. 总体原则：能不用就不用，如果不用比较吃力才考虑使用

#### 7.1.4. redux 工作流程

![img](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

### 7.2. redux 的三个核心概念

#### 7.2.1. action

1. 动作的对象
2. 包含两个属性
   - type：标识属性，值为字符串，唯一，必要属性
   - data：数据属性，值任意类型，可选属性
3. 例子：`{type: 'ADD_STUDENT', data: {name: 'tom', age: 18}}`

#### 7.2.2. reducer

1. 用于初始化状态、加工状态
2. 加工时，根据旧的 state 和 action，产生新的 state 的纯函数

#### 7.2.3. store

1. 将 state、action、reducer 联系在一起的对象
2. 如何得到此对象？
   - `import {createStore} from 'redux'`
   - `import reducer from './reducers'`
   - `const store = createStore(reducer)`
3. 此对象的功能？
   - getState()：得到 state
   - dispatch(action)：分发 action，触发 reducer 调用，产生新的 state
   - subscribe(listener)：注册监听，当产生了新的 state 时，自动调用

### 7.3. redux 的核心 API

### 7.4. 使用 redux 编写应用

