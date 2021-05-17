const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('有人请求服务器1了');
    console.log('请求来自于', req.get('Host'));
    console.log('请求的地址', req.url);
    next();
});

app.get('/students', (req, res) => {
    const students = [
        {id: 1, name: 'tom', age: 18},
        {id: 2, name: 'jerry', age: 19},
        {id: 3, name: 'lily', age: 20}
    ];

    res.send(students);
});

app.listen(5000, err => {
    if (!err) {
        console.log('服务器1启动成功了，请求学生信息的地址为：http://localhost:5000');
    }
});