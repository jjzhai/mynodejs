var koa = require('koa');
var app = koa();

// x-response-time 中间件

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
  console.log('x-response-time jjzhai');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
  console.log('logger jjzhai');
});

// response
app.use(function *(){
    //以前结果输出response.end();response.render();response.json();
    this.body = 'Hello world';//content-Type会自动识别输出的类型  koa
});

app.listen(3000);

//执行结果：GET / - 7              logger jjzhai      x-response-time jjzhai
//执行顺序，先执行x-response-time到yield next;再执行logger的yield next;在执行response的输出hello world，
//然后执行loggeryield next;后面的输出logger jjzhai，最后执行x-response-time的yield next后面的输出x-response-time jjzhai
//先顺序再逆序