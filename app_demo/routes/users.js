//处理所有用户请求的路由
var express = require('express');
var router = express.Router();

//路由回调函数 function 处理业务逻辑
router.all('/list',function(req,res){
    //请求中可以获得的参数
    console.log(req.method);//请求方式，get、post
    console.log(req.baseUrl);//请求的资源路径/user
    console.log(req.path);//请求的当前路径 /list
    console.log(req.headers['user-agent']);//请求头部信息user-agent
    console.log(req.get('user-agent'));//请求头部信息user-agent
    console.log(req.query);//获取url查询参数值
    console.log(req.query.id);//获取url查询参数中id的值 访问/user/list?id=101
    console.log(req.body);//post请求时，获取body中的参数值   转码后的json对象
    console.log(req.body.id);//
    
    res.send('hello/list');
});

//response向浏览器输出响应结果
router.get('/fb',function(req,res){
    res.status(403).send('^_^ forbidden!');
});

router.get('/tt',function(req,res){
    res.contentType("application/javascript");
    res.sendFile('/ok.js',{root: __dirname + '/../public'});//向浏览器输出一个文件，第一个相对路径，第二个指定相对的是哪个路径.__dirname当前users.js这个文件的路径
});

router.get('/mm',function(req,res){
    res.json({a:1,b:[true,'ok']});//响应的是一个json形式
});

//rest风格的请求，通过/user/101就能获得到id=101的,:id表一个参数，参数名是id
//访问/user/101  得到101 
//由于:id是个参数，没有指名参数类型时，任何字符fb、tt都可以匹配，且路由是从上向下匹配的，所以如果它放在最前面，则其后面的都不会执行
router.get('/:id',function(req,res){
    console.log(req.params.id);
    res.send('ok');
});

module.exports = router;