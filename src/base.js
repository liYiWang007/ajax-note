// 1.引入express vscode 快捷键 'express'+tab
//  const { request, response } = require('express');
const express = require("express")

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
  response.setRequestHeader("Access-Control-Allow-Headers", "*")
  // 设置响应体
  response.send("Hello Ajax POST")
})

// .all() 可以接受任类型请求 为了自定义header改的
app.all("/json-server", (request, response) => {

  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  response.setRequestHeader("Access-Control-Allow-Headers", "*")
  // 设置响应体
  response.send("Hello Ajax json-server")
})

// 4.监听端口启动
app.listen(8000, () => {
  console.log("正在监听端口8000,http://127.0.0.1:8000")
})
