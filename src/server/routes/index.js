var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var co = require('co');
	var thunkify = require ("thunkify")
	
	function sleep(param, callback) {
		setTimeout(function() {
			callback(null, `I woke up (${param}) at ` + new Date());
		}, 1000);
	}
	var sleep = thunkify(sleep);
	
	co(function *() {
		console.log("1:", yield sleep(1));
		console.log("2:", yield sleep(2));
		console.log("3:", yield sleep(3));
		console.log("4:", yield sleep(4));
		console.log("5:", yield sleep(5));
	})

	res.render('index', { title: 'Express' });
});

module.exports = router;
