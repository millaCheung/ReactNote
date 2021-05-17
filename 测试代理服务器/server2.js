const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('有人请求服务器2了');
    next();
});

app.get('/cars', (req, res) => {
    const cars = [
        {id: 1, name: '奔驰', price: 199999},
        {id: 2, name: '宝马', price: 19999},
        {id: 3, name: '马自达', price: 188999}
    ];

    res.send(cars);
});

app.listen(5001, err => {
    if (!err) {
        console.log('服务器2启动成功了，请求汽车信息的地址为：http://localhost:5001');
    }
});