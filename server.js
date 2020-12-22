const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Exprss HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
//helpers
app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Abraham Olvera',
    });

    /* let salida = {
        nombre: 'abraham',
        edad: 32,
        url: req.url
    }; */
    //res.send(salida);
    //res.send('Hola mundo en español');
});
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(port);