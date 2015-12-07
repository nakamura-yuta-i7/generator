/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(1);
	var path = __webpack_require__(2);
	var favicon = __webpack_require__(3);
	var logger = __webpack_require__(4);
	var cookieParser = __webpack_require__(5);
	var bodyParser = __webpack_require__(6);
	
	var routes = __webpack_require__(7);
	var users = __webpack_require__(8);
	
	var app = express();
	app.set('views', './dist/server/views');
	app.set('view engine', 'jade');
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static('./dist/public'));
	
	app.use('/', routes);
	app.use('/users', users);
	
	// catch 404 and forward to error handler
	app.use(function (req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});
	
	// error handlers
	
	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
	  app.use(function (err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
	      message: err.message,
	      error: err
	    });
	  });
	}
	
	// production error handler
	// no stacktraces leaked to user
	app.use(function (err, req, res, next) {
	  res.status(err.status || 500);
	  res.render('error', {
	    message: err.message,
	    error: {}
	  });
	});
	
	var debug = __webpack_require__(9)('generator:server');
	var http = __webpack_require__(10);
	var port = normalizePort(process.env.PORT || '3000');
	app.set('port', port);
	var server = http.createServer(app);
	server.listen(port);
	server.on('error', onError);
	server.on('listening', onListening);
	
	function normalizePort(val) {
	  var port = parseInt(val, 10);
	
	  if (isNaN(port)) {
	    // named pipe
	    return val;
	  }
	
	  if (port >= 0) {
	    // port number
	    return port;
	  }
	
	  return false;
	}
	function onError(error) {
	  if (error.syscall !== 'listen') {
	    throw error;
	  }
	
	  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
	
	  // handle specific listen errors with friendly messages
	  switch (error.code) {
	    case 'EACCES':
	      console.error(bind + ' requires elevated privileges');
	      process.exit(1);
	      break;
	    case 'EADDRINUSE':
	      console.error(bind + ' is already in use');
	      process.exit(1);
	      break;
	    default:
	      throw error;
	  }
	}
	function onListening() {
	  var addr = server.address();
	  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	  debug('Listening on ' + bind);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(1);
	var router = express.Router();
	
	/* GET home page. */
	router.get('/', function (req, res, next) {
	  res.render('index', { title: 'Express' });
	});
	
	module.exports = router;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(1);
	var router = express.Router();
	
	/* GET users listing. */
	router.get('/', function (req, res, next) {
	  res.send('respond with a resource');
	});
	
	module.exports = router;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("debug");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmE2NWExMmU4NDkzNzgzNWUxYTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVidWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxLQUFJLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQVMsQ0FBQyxDQUFDO0FBQ2pDLEtBQUksSUFBSSxHQUFHLG1CQUFPLENBQUMsQ0FBTSxDQUFDLENBQUM7QUFDM0IsS0FBSSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxDQUFlLENBQUMsQ0FBQztBQUN2QyxLQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLENBQVEsQ0FBQyxDQUFDO0FBQy9CLEtBQUksWUFBWSxHQUFHLG1CQUFPLENBQUMsQ0FBZSxDQUFDLENBQUM7QUFD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QUssUUFBUSxHQUMvQixPQUFPLEdBQUcsSUFBSSxHQUNkLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFFBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7QUMxR2hDLHFDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEseUM7Ozs7Ozs7O0FDQUEsS0FBSSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxDQUFTLENBQUMsQ0FBQztBQUNqQyxLQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFOzs7QUFHN0IsT0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUN2QyxNQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0VBQzNDLENBQUMsQ0FBQzs7QUFFSCxPQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQzs7Ozs7Ozs7QUNSdkIsS0FBSSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxDQUFTLENBQUMsQ0FBQztBQUNqQyxLQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFOzs7QUFHN0IsT0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUN2QyxNQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7RUFDckMsQ0FBQyxDQUFDOztBQUVILE9BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDOzs7Ozs7QUNSdkIsbUM7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYmE2NWExMmU4NDkzNzgzNWUxYTZcbiAqKi8iLCJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGZhdmljb24gPSByZXF1aXJlKCdzZXJ2ZS1mYXZpY29uJyk7XG52YXIgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG52YXIgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO1xudmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuXG52YXIgcm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvaW5kZXgnKTtcbnZhciB1c2VycyA9IHJlcXVpcmUoJy4vcm91dGVzL3VzZXJzJyk7XG5cbnZhciBhcHAgPSBleHByZXNzKCk7XG5hcHAuc2V0KCd2aWV3cycsICcuL2Rpc3Qvc2VydmVyL3ZpZXdzJyk7XG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdqYWRlJyk7XG4vL2FwcC51c2UoZmF2aWNvbihwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJywgJ2Zhdmljb24uaWNvJykpKTtcbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygnLi9kaXN0L3B1YmxpYycpKTtcblxuYXBwLnVzZSgnLycsIHJvdXRlcyk7XG5hcHAudXNlKCcvdXNlcnMnLCB1c2Vycyk7XG5cbi8vIGNhdGNoIDQwNCBhbmQgZm9yd2FyZCB0byBlcnJvciBoYW5kbGVyXG5hcHAudXNlKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ05vdCBGb3VuZCcpO1xuICBlcnIuc3RhdHVzID0gNDA0O1xuICBuZXh0KGVycik7XG59KTtcblxuLy8gZXJyb3IgaGFuZGxlcnNcblxuLy8gZGV2ZWxvcG1lbnQgZXJyb3IgaGFuZGxlclxuLy8gd2lsbCBwcmludCBzdGFja3RyYWNlXG5pZiAoYXBwLmdldCgnZW52JykgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgYXBwLnVzZShmdW5jdGlvbihlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gICAgcmVzLnJlbmRlcignZXJyb3InLCB7XG4gICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICAgIGVycm9yOiBlcnJcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIHByb2R1Y3Rpb24gZXJyb3IgaGFuZGxlclxuLy8gbm8gc3RhY2t0cmFjZXMgbGVha2VkIHRvIHVzZXJcbmFwcC51c2UoZnVuY3Rpb24oZXJyLCByZXEsIHJlcywgbmV4dCkge1xuICByZXMuc3RhdHVzKGVyci5zdGF0dXMgfHwgNTAwKTtcbiAgcmVzLnJlbmRlcignZXJyb3InLCB7XG4gICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgZXJyb3I6IHt9XG4gIH0pO1xufSk7XG5cbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2dlbmVyYXRvcjpzZXJ2ZXInKTtcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xudmFyIHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgJzMwMDAnKTtcbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcbnZhciBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuc2VydmVyLmxpc3Rlbihwb3J0KTtcbnNlcnZlci5vbignZXJyb3InLCBvbkVycm9yKTtcbnNlcnZlci5vbignbGlzdGVuaW5nJywgb25MaXN0ZW5pbmcpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVQb3J0KHZhbCkge1xuICB2YXIgcG9ydCA9IHBhcnNlSW50KHZhbCwgMTApO1xuXG4gIGlmIChpc05hTihwb3J0KSkge1xuICAgIC8vIG5hbWVkIHBpcGVcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgaWYgKHBvcnQgPj0gMCkge1xuICAgIC8vIHBvcnQgbnVtYmVyXG4gICAgcmV0dXJuIHBvcnQ7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gIGlmIChlcnJvci5zeXNjYWxsICE9PSAnbGlzdGVuJykge1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgdmFyIGJpbmQgPSB0eXBlb2YgcG9ydCA9PT0gJ3N0cmluZydcbiAgICA/ICdQaXBlICcgKyBwb3J0XG4gICAgOiAnUG9ydCAnICsgcG9ydDtcblxuICAvLyBoYW5kbGUgc3BlY2lmaWMgbGlzdGVuIGVycm9ycyB3aXRoIGZyaWVuZGx5IG1lc3NhZ2VzXG4gIHN3aXRjaCAoZXJyb3IuY29kZSkge1xuICAgIGNhc2UgJ0VBQ0NFUyc6XG4gICAgICBjb25zb2xlLmVycm9yKGJpbmQgKyAnIHJlcXVpcmVzIGVsZXZhdGVkIHByaXZpbGVnZXMnKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VBRERSSU5VU0UnOlxuICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgJyBpcyBhbHJlYWR5IGluIHVzZScpO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IGVycm9yO1xuICB9XG59XG5mdW5jdGlvbiBvbkxpc3RlbmluZygpIHtcbiAgdmFyIGFkZHIgPSBzZXJ2ZXIuYWRkcmVzcygpO1xuICB2YXIgYmluZCA9IHR5cGVvZiBhZGRyID09PSAnc3RyaW5nJ1xuICAgID8gJ3BpcGUgJyArIGFkZHJcbiAgICA6ICdwb3J0ICcgKyBhZGRyLnBvcnQ7XG4gIGRlYnVnKCdMaXN0ZW5pbmcgb24gJyArIGJpbmQpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmVyL2FwcC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImV4cHJlc3NcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInNlcnZlLWZhdmljb25cIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibW9yZ2FuXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qIEdFVCBob21lIHBhZ2UuICovXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7IHRpdGxlOiAnRXhwcmVzcycgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2ZXIvcm91dGVzL2luZGV4LmpzXG4gKiovIiwidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIHJlc291cmNlJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2ZXIvcm91dGVzL3VzZXJzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVidWdcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImRlYnVnXCJcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJodHRwXCJcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==