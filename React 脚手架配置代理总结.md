# React 脚手架配置代理总结

## 方法一

> 在 package.json 中追加如下配置

```
"proxy": "http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀
2. 缺点：不能配置多个代理
3. 工作方式：上述方式配置代理，当请求了 3000 不存在的资源时，那么该请求会转发给 5000（优先匹配前端资源）

## 方法二

1. 第一步：创建代理配置文件

   ```
   在 src 下创建配置文件：src/setupProxy.js
   ```

2. 编写 setupProxy.js 配置具体代理规则：

   ```javascript
   const proxy = require('http-proxy-middleware');
   
   module.exports = function (app) {
     app.use(
         proxy('/api1', { // 遇见 /api 前缀的请求，就会触发该代理配置
             target: 'http://localhost:5000', // 请求转发给谁
             changeOrigin: true, // 控制服务器收到的请求头中 host 的值
             /*
             	changeOrigin 设置为 true 时，服务器收到的请求头的 host 为：localhost:5000
             	changeOrigin 设置为 false 时，服务器收到的请求头的 host 为：localhost:3000
             */
             pathRewrite: {'^/api1': ''} // 重写请求路径（必须）
         }),
         proxy('/api2', {
             target: 'http://localhost:5001',
             changeOrigin: true,
             pathRewrite: {'^/api2': ''}
         })
     )
   };
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理
2. 缺点：配置繁琐，前端请求资源时必须加前缀