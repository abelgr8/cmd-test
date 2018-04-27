var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,'../public/ind.html'));
});

router.get('/signup', function (req, res) {
	console.log('hey');
	res.sendFile(path.join(__dirname, '../public/signup.html' )); 
} ); 

module.exports = router; 

