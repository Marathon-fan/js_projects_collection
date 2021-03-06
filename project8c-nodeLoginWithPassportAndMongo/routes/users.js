var express = require('express');
var router = express.Router();

// register
router.get('/register', function(req, res) {
    res.render('register'); // render the view called index
});

// login 
router.get('/login', function(req, res) {
    res.render('login'); // render the view(template) called login
});

// register user
router.post('/register', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    console.log(name);
});

module.exports = router;
