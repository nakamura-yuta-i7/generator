var express = require('express');
var router = express.Router();

var co = require("co")
var thunkify = require("thunkify")
var db = require("../libs/mysql")

/* GET users listing. */
router.get('/', function(req, res, next) {
	var query = thunkify(db.query.bind(db))
	
	co(function *() {
		var result = yield query("select * from users")
		res.json(result[0])
	})
});

module.exports = router;
