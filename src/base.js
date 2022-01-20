// 1.引入express vscode 快捷键 'express'+tab
//  const { request, response } = require('express');
const express = require("express")
const { handle } = require("express/lib/application")

// 2.创建应用对象
const app = express()

//  3.创建路由规则
// request:封装请求标头
// response：封装响应标头
app.get("/server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 设置响应体
  response.send("Hello Ajax")
})
// .all() 可以接受任类型请求 为了自定义header改的
app.all("/server", (request, response) => {
  // 默认用post
  // app.post('/server',(request,response)=>{
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 允许自定义响应头属性
  response.setHeader("Access-Control-Allow-Headers", "*")
  // 设置响应体
  response.send("Hello Ajax POST")
})

// 为了自定义header改的 .all() 可以接受任类型请求
// .all()=get/post等等
app.all("/json-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 允许自定义响应头属性
  response.setHeader("Access-Control-Allow-Headers", "*")

  const data = {
    name: "test",
  }

  // 转化为字符串
  let str = JSON.stringify(data)
  // 设置响应体
  response.send(str)
})

// IE清缓存
app.get("/ie", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 设置响应体
  response.send("Hello IE CACHE")
})

// 请求超时
app.get("/delay", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")

  setTimeout(() => {
    // 设置响应体
    response.send("来不了啦")
  }, 3000)
})

// jquery-ajax 服务
// .all()=get/post等等
app.all("/jquery-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 允许自定义响应头属性
  response.setHeader("Access-Control-Allow-Headers", "*")

  const data = {
    name: "query-ajax",
  }
  // 设置响应体，需要转化为json
  response.send(JSON.stringify(data))
  // 设置响应体
  //   response.send("jquery-ajax")
})

// ajax-axios 服务
app.all("/axios-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 允许自定义响应头属性
  response.setHeader("Access-Control-Allow-Headers", "*")

  const data = {
    name: "axios-server",
  }
  // 设置响应体，需要转化为json
  response.send(JSON.stringify(data))
})

// ajax-axios 服务
app.all("/axios-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 允许自定义响应头属性
  response.setHeader("Access-Control-Allow-Headers", "*")

  const data = {
    name: "axios-server",
  }
  // 设置响应体，需要转化为json
  response.send(JSON.stringify(data))
})

// fetch 服务
app.all("/fetch-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 允许自定义响应头属性
  response.setHeader("Access-Control-Allow-Headers", "*")

  const data = {
    name: "Hello fetch",
  }
  // 设置响应体，需要转化为json
  response.send(JSON.stringify(data))
})

// // JSONP 跨域
// app.all("/jsonp-server", (request, response) => {
//   // 设置响应头 设置允许跨域
//   response.setHeader("Access-Control-Allow-Origin", "*")
//   // 设置响应体
//   response.send('来自8000端口的jsonp')
// })
// JSONP 跨域2
app.all("/jsonp-server", (request, response) => {
  const data = {
    name: "跨域原理 来自8000端口的jsonp",
  }
  let str = JSON.stringify(data)
  // 设置响应体，返回函数调用
  response.end(`handleD(${str})`)
})

// JSONP 跨域3 校验用户名字
app.all("/confirm-username", (request, response) => {
  const data = {
    exist: 1,
    msg: "用户名已存在",
  }
  let str = JSON.stringify(data)
  // 设置响应体，返回函数调用
  response.end(`handleD(${str})`)
})

// JSONP 跨域4 jquery
app.all("/jquery-jsonp", (request, response) => {
  const data = {
    name: "hello jquery-jsonp",
    city: ["广州", "北京", "上海"],
  }
  let str = JSON.stringify(data)
  //接受callback 参数
  let cb = request.query.callback
  // 设置响应体，返回函数调用
  response.send(`${cb}(${str})`)
})

// JSONP 跨域5 cors
app.all("/cors-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  //只允许某个url发送跨域请求
  //response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
  const data = {
    name: "hello cors",
    city: ["广州", "北京", "上海"],
  }
  let str = JSON.stringify(data)

  // 设置响应体，返回函数调用
  response.send("hello cors")
})

// 4.监听端口启动
app.listen(8000, () => {
  console.log("正在监听端口8000,http://127.0.0.1:8000")
})
