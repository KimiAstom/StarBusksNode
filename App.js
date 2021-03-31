const express = require('express')
const fs = require('fs')

const App = express()

App.get('/menuList', function (req, res) {
  fs.readFile('./public/menu.json', function (err, data) {
    if (err) {
      res.status(500)
      res.send('服务器，忙请稍等！')
    } else {
      res.status(200)
      res.header('Content-Type', 'application/json')
      res.header('Access-Control-Allow-Origin',"*")
      res.send(data)
    }
  })
})

App.get('/starList', function (req, res) {
  fs.readFile('./public/star.json', function (err, data) {
    if (err) {
      res.status(500)
      res.send('服务器，忙请稍等！')
    } else {
      res.status(200)
      res.header('Content-Type', 'application/json')
      res.header('Access-Control-Allow-Origin',"*")
      res.send(data)
    }
  })
})

App.listen(3000, function () {
  console.log('running...')
})