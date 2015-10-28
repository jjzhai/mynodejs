var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extends: false
}));

//静态文件目录
app.use(express.static(__dirname + '/public'));

//路由与业务逻辑,引入user.js,得到user.js中的router，通过访问/user/list可以打印 hello/list
app.use('/user',require('./routes/users.js'));

//app.get('/',function (req,res) {
//    res.send("hello");
//});

app.listen(3000);