//引入express
const { response } = require('express');
const express = require('express');
//创建应用对象
const app = express();
//创建路由规则
app.get('/server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin","*");
  
  //设置响应
  response.send("hello")
});
app.post('/server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin","*");
  response.setHeader("Access-Control-Allow-Headers","*");
  //设置响应
  response.send("hello")
});
app.get('/ie',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin","*");
  //设置响应
  response.send("hello ie");
});
app.get('/delay',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin","*");
  //设置响应
  setTimeout(()=>{
    response.send("延时响应");
  },3000)
});
app.all("/axios-server",(request,response)=>{
  response.setHeader("Access-Control-Allow-Origin","*");
  response.setHeader("Access-Control-Allow-Headers","*");
  const data={
    name:"zhang"
  }
  response.send(JSON.stringify(data));
})
app.all("/fetch-server",(request,response)=>{
  response.setHeader("Access-Control-Allow-Origin","*");
  response.setHeader("Access-Control-Allow-Headers","*");
  const data={
    name:"zhang"
  }
  response.send(JSON.stringify(data));
})
app.all("/jsonp-server",(request,response)=>{
  // response.send('console.log("hello jsonp")')
  const data = {
    name:"zhang"
  }
  let str = JSON.stringify(data);
  response.end(`handle(${str})`);
})
app.all("/check-username",(request,response)=>{
  // response.send('console.log("hello jsonp")')
  const data = {
    name:"zhang"
  }
  let str = JSON.stringify(data);
  response.end(`handle(${str})`);
})
app.all("/cors-server",(request,response)=>{
  response.send("hello cors")
})
//监听端口启动服务
app.listen(8001,()=>{
  console.log("服务已启动");
  console.log("http://127.0.0.1:8001/server");
})


