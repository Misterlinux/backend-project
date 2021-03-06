//const secrets = require("./secrets");

const { Pool } = require("pg");
/*
const pool = new Pool({
    user: secrets.dbUser,
    host: secrets.dbHost,
    database: secrets.dbName,
    password: secrets.dbPassword,
    port: secrets.dbPort,
})
*/
const express = require("express");
var app = express();
var session = require('express-session');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/users", (request, response) => {
    var name = request.body.name;
    var email = request.body.email;
    var password = request.body.password;

    if (name && password && email) {
        pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password])
        response.status(201).send('User created and saved to database.');
    } else {
        response.status(400).send('Review your requests body.');
    }
});

app.post('/auth', (request, response) => {
    var email = request.body.email;
    var password = request.body.password;
    console.log(request.body)
    var parameters = [email, password];
    if (email && password) {
        //pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', parameters,
        //    (error, results, fields) => {
        //        if (results.rowCount > 0) {
            if (password=="1234") {
                    //var userName = results.rows[0].name;
                    var userName = email;
                    //console.log(request.session);
                    request.session.loggedin = true;
                    request.session.username = userName;
                    console.log(request.session);
                    //response.redirect('/');
               } 
                
            //);
    }
    response.json(request.session);
});

app.get('/', (request, response) => {
    if (request.session.loggedin) {
        response.json('Welcome back, ' + request.session.username + '!');
    } else {
<<<<<<< HEAD
        console.log("ok so, the redirect works BUT")
        response.send('Please login to view this page!');
=======
        response.json('Please login to view this page!');
>>>>>>> 36e0d3ca638a3f31f1f5f5e99c65b5f5736da54e
    }
    response.end();
});

app.get('/logout', (request, response) => {
    request.session.destroy()
    response.end();
});

app.get('/test', (req, res) => {
    console.log("indeed")
    res.send("welcome to the indeed")
})

app.post('/test', (req, res) => {
    console.log("enviando")
    console.log(req.body)
    res.send("here")
})

var port = 5000;
app.listen(port, () => console.log(`SERVER LISTENING IN PORT : ${port}`));