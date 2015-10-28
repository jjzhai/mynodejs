var express = require('express');
var app = express();

app.get('/jikexueyuan',function (req, res) {
    res.send('hello jikexueyuan');
});

app.listen(3000);