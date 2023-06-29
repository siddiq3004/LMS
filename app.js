const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


app.listen(process.env.PORT ||  port, () => console.log(`Listening on port ${port}`))
app.use(express.static('static'));

app.get('/home', (request, respone) => {
    respone.sendFile('home.html', { root : './templates/' });
});

app.get('/', (request, respone) => {
    respone.sendFile('signup.html', { root : './templates/' });
});

app.get('/login', (request, respone) => {
    respone.sendFile('login.html', { root : './templates/' });
});

app.get('/publications', (request, respone) => {
    respone.sendFile('publications.html', { root : './templates/' });
});

app.get('/borrow', (request, respone) => {
    respone.sendFile('borrow.html', { root : './templates/' });
});

