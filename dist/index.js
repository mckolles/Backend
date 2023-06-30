"use strict";
const express = require('express');
const app = express();
const port = 3000;
// Обработчик GET запроса на корневой URL
app.get('/', (req, res) => {
    ~``;
    res.send('Привет, мир!');
});
// Обработчик POST запроса на URL '/login'
app.post('/login', (req, res) => {
    res.send('Вы отправили POST запрос на страницу входа');
});
// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
