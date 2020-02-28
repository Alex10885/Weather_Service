const express = require('express'); //получаем доступ до модуля express
const bodyParser = require('body-parser'); //получаем доступ к парсеру
const weatherRequest = require('./requests/weather.request');

const app = express(); //создаем переменную которая является результатом работы функции express

//b20e248d1629605ef70f33bcde12f1ec

app.set('view engine', 'ejs'); //устанавливаем щаблониpатор
app.use(express.static('public')); // определяем место положения статики
app.use(bodyParser.urlencoded({extended: true})); // включаем парсер

app.get('/', (req, res) => (
    res.render('index', {weather: null, error: null})
));

app.post('/', async (req, res) => {

    const {city} = req.body;
    const {weather, error} = await weatherRequest(city)
    res.render('index', {weather, error});
});

app.listen(3000, () => {
    console.log('Server has started on port 3000...');//запускаем сервер на порту 3000
});