const express=require('express')

const app =express()

app.get('/home',(request,response)=>{
    // 响应一个页面
    response.sendFile(__dirname+'/index.html')
})
app.get('/data',(request,response)=>{
    // 响应一个页面
    response.send('获取同源数据示例')
})
app.listen(91,()=>{
    console.log("http://127.0.0.1:91 服务启动")
})