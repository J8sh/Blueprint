var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
// is use to simplify file paths. we don't npm install
// is that 'path' is a core module. 
var path = require('path');
var expressValidator = require('express-validator');

var app = express();

/*
var logger = function(req, res, next){
    console.log('Logging...');
    next();
}

app.use(logger);
*/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middeware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

//Global Vars
app.use(function(req, res, next){
    res.locals.errors = null;
    next();
})

// Express Validator Middleware
app.use(expressValidator());

var users = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'janedoe@gmail.com'
    },
    {
        id: 3,
        first_name: 'Joey',
        last_name: 'Smith',
        email: 'joeysmith@gmail.com'
    }]

app.get('/', function(req, res){
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.post('/users/add', function(req, res){

    //this comes from express-validator
    req.checkBody('first_name', 'First Name is Required').notEmpty();
    req.checkBody('last_name', 'Last Name is Required').notEmpty();
    req.checkBody('email', 'email is Required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.render('index', {
            title: 'Customers',
            users: users,
            errors: errors
        });
    } else {
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }

        console.log('SUCCESS');
    }
});

app.listen(3000, function(){
    console.log('Server Started on Port 3000...');
})

/*
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Iktan117#2017",
    database: "Blueprint_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})*/



///// STOP VIDEO ON 52:04 NEED TO INSTALL MONGO DB