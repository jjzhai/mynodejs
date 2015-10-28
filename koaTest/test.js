var koa = require('koa');
var app = koa();

app.use(function *(){
    var controller=this.request.path;
    if(controller=="/test" || controller=="/test/"){
        this.body={
            test:"ok"
        }
    }else if(controller=="/index" || controller=="/index/"){
        this.body='Hello jjzhai';
        console.log(this.request.query);
    }else{
        this.throw(404,'当前内容并未找到');
    }
    console.log(this.request.path);
    //this.throw(404,'wrong');
    //this.body = 'hello jjzhai';
    //console.log(this.request);
    //console.log(this.response);
});

app.listen(3000);