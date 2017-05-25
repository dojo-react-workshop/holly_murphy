var express = require('express')
var app = express()
var path = require('path')
var fs = require('fs')
var bp=require('body-parser')
app.use(express.static(path.join(__dirname + '/client')))
app.use(bp.urlencoded({extended:true}))
app.set('views',path.join(__dirname + '/client/templates'))
app.set('view engine', 'ejs')

require('./server/config/routes.js')(app)

app.listen(8000, ()=>{
    console.log(`server is running on 8000`)
})