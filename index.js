const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

//设置允许跨域请求
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
  res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
  res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/r/reactjs', function (req, res) {
  const file = path.join(__dirname, 'data/json1.json')
  fs.readFile(file, 'utf-8', function(err, data) {
      if (err) {
          res.send('文件读取失败');
      } else {
          res.send(data);
      }
  })
})

app.get('/r/frontend', function (req, res) {
  const file = path.join(__dirname, 'data/json2.json')
  fs.readFile(file, 'utf-8', function(err, data) {
      if (err) {
          res.send('文件读取失败');
      } else {
          res.send(data);
      }
  })
})

const server = app.listen(8088, function() {
  const host = server.address().address
  const port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", '192.168.10.122', 8088)
})