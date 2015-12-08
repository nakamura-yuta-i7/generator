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
	
	__webpack_require__(1);
	
	var express = __webpack_require__(2);
	var path = __webpack_require__(3);
	var favicon = __webpack_require__(4);
	var logger = __webpack_require__(5);
	var cookieParser = __webpack_require__(6);
	var bodyParser = __webpack_require__(7);
	
	var routes = __webpack_require__(8);
	var users = __webpack_require__(9);
	
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
	
	var debug = __webpack_require__(10)('generator:server');
	var http = __webpack_require__(11);
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

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(2);
	var router = express.Router();
	
	/* GET home page. */
	router.get('/', function (req, res, next) {
	
		var co = __webpack_require__(12);
		var thunkify = __webpack_require__(13);
	
		function sleep(param, callback) {
			setTimeout(function () {
				callback(null, 'I woke up (' + param + ') at ' + new Date());
			}, 1000);
		}
		var sleep = thunkify(sleep);
	
		co(regeneratorRuntime.mark(function _callee() {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.t0 = console;
							_context.next = 3;
							return sleep(1);
	
						case 3:
							_context.t1 = _context.sent;
	
							_context.t0.log.call(_context.t0, "1:", _context.t1);
	
							_context.t2 = console;
							_context.next = 8;
							return sleep(2);
	
						case 8:
							_context.t3 = _context.sent;
	
							_context.t2.log.call(_context.t2, "2:", _context.t3);
	
							_context.t4 = console;
							_context.next = 13;
							return sleep(3);
	
						case 13:
							_context.t5 = _context.sent;
	
							_context.t4.log.call(_context.t4, "3:", _context.t5);
	
							_context.t6 = console;
							_context.next = 18;
							return sleep(4);
	
						case 18:
							_context.t7 = _context.sent;
	
							_context.t6.log.call(_context.t6, "4:", _context.t7);
	
							_context.t8 = console;
							_context.next = 23;
							return sleep(5);
	
						case 23:
							_context.t9 = _context.sent;
	
							_context.t8.log.call(_context.t8, "5:", _context.t9);
	
						case 25:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));
	
		res.render('index', { title: 'Express' });
	});
	
	module.exports = router;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(2);
	var router = express.Router();
	
	/* GET users listing. */
	router.get('/', function (req, res, next) {
	  res.send('respond with a resource');
	});
	
	module.exports = router;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("debug");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 12 */
/***/ function(module, exports) {

	
	/**
	 * slice() reference.
	 */
	
	var slice = Array.prototype.slice;
	
	/**
	 * Expose `co`.
	 */
	
	module.exports = co['default'] = co.co = co;
	
	/**
	 * Wrap the given generator `fn` into a
	 * function that returns a promise.
	 * This is a separate function so that
	 * every `co()` call doesn't create a new,
	 * unnecessary closure.
	 *
	 * @param {GeneratorFunction} fn
	 * @return {Function}
	 * @api public
	 */
	
	co.wrap = function (fn) {
	  createPromise.__generatorFunction__ = fn;
	  return createPromise;
	  function createPromise() {
	    return co.call(this, fn.apply(this, arguments));
	  }
	};
	
	/**
	 * Execute the generator function or a generator
	 * and return a promise.
	 *
	 * @param {Function} fn
	 * @return {Promise}
	 * @api public
	 */
	
	function co(gen) {
	  var ctx = this;
	  var args = slice.call(arguments, 1)
	
	  // we wrap everything in a promise to avoid promise chaining,
	  // which leads to memory leak errors.
	  // see https://github.com/tj/co/issues/180
	  return new Promise(function(resolve, reject) {
	    if (typeof gen === 'function') gen = gen.apply(ctx, args);
	    if (!gen || typeof gen.next !== 'function') return resolve(gen);
	
	    onFulfilled();
	
	    /**
	     * @param {Mixed} res
	     * @return {Promise}
	     * @api private
	     */
	
	    function onFulfilled(res) {
	      var ret;
	      try {
	        ret = gen.next(res);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }
	
	    /**
	     * @param {Error} err
	     * @return {Promise}
	     * @api private
	     */
	
	    function onRejected(err) {
	      var ret;
	      try {
	        ret = gen.throw(err);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }
	
	    /**
	     * Get the next value in the generator,
	     * return a promise.
	     *
	     * @param {Object} ret
	     * @return {Promise}
	     * @api private
	     */
	
	    function next(ret) {
	      if (ret.done) return resolve(ret.value);
	      var value = toPromise.call(ctx, ret.value);
	      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
	      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
	        + 'but the following object was passed: "' + String(ret.value) + '"'));
	    }
	  });
	}
	
	/**
	 * Convert a `yield`ed value into a promise.
	 *
	 * @param {Mixed} obj
	 * @return {Promise}
	 * @api private
	 */
	
	function toPromise(obj) {
	  if (!obj) return obj;
	  if (isPromise(obj)) return obj;
	  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
	  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
	  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
	  if (isObject(obj)) return objectToPromise.call(this, obj);
	  return obj;
	}
	
	/**
	 * Convert a thunk to a promise.
	 *
	 * @param {Function}
	 * @return {Promise}
	 * @api private
	 */
	
	function thunkToPromise(fn) {
	  var ctx = this;
	  return new Promise(function (resolve, reject) {
	    fn.call(ctx, function (err, res) {
	      if (err) return reject(err);
	      if (arguments.length > 2) res = slice.call(arguments, 1);
	      resolve(res);
	    });
	  });
	}
	
	/**
	 * Convert an array of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Array} obj
	 * @return {Promise}
	 * @api private
	 */
	
	function arrayToPromise(obj) {
	  return Promise.all(obj.map(toPromise, this));
	}
	
	/**
	 * Convert an object of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Object} obj
	 * @return {Promise}
	 * @api private
	 */
	
	function objectToPromise(obj){
	  var results = new obj.constructor();
	  var keys = Object.keys(obj);
	  var promises = [];
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var promise = toPromise.call(this, obj[key]);
	    if (promise && isPromise(promise)) defer(promise, key);
	    else results[key] = obj[key];
	  }
	  return Promise.all(promises).then(function () {
	    return results;
	  });
	
	  function defer(promise, key) {
	    // predefine the key in the result
	    results[key] = undefined;
	    promises.push(promise.then(function (res) {
	      results[key] = res;
	    }));
	  }
	}
	
	/**
	 * Check if `obj` is a promise.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isPromise(obj) {
	  return 'function' == typeof obj.then;
	}
	
	/**
	 * Check if `obj` is a generator.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isGenerator(obj) {
	  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
	}
	
	/**
	 * Check if `obj` is a generator function.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	function isGeneratorFunction(obj) {
	  var constructor = obj.constructor;
	  if (!constructor) return false;
	  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
	  return isGenerator(constructor.prototype);
	}
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(val) {
	  return Object == val.constructor;
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var assert = __webpack_require__(14);
	
	/**
	 * Expose `thunkify()`.
	 */
	
	module.exports = thunkify;
	
	/**
	 * Wrap a regular callback `fn` as a thunk.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 * @api public
	 */
	
	function thunkify(fn){
	  assert('function' == typeof fn, 'function required');
	
	  return function(){
	    var args = new Array(arguments.length);
	    var ctx = this;
	
	    for(var i = 0; i < args.length; ++i) {
	      args[i] = arguments[i];
	    }
	
	    return function(done){
	      var called;
	
	      args.push(function(){
	        if (called) return;
	        called = true;
	        done.apply(null, arguments);
	      });
	
	      try {
	        fn.apply(ctx, args);
	      } catch (err) {
	        done(err);
	      }
	    }
	  }
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("assert");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWZhMTNhNDg5NzNkNTM2MzZkMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZlLWZhdmljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vLi9+L2NvL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdGh1bmtpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxvQkFBTyxDQUFDLENBQWdCLENBQUMsQ0FBQzs7QUFFMUIsS0FBSSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxDQUFTLENBQUMsQ0FBQztBQUNqQyxLQUFJLElBQUksR0FB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QUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM09BO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFrQixpQkFBaUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoREEsb0MiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlZmExM2E0ODk3M2Q1MzYzNmQzN1xuICoqLyIsInJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxudmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBmYXZpY29uID0gcmVxdWlyZSgnc2VydmUtZmF2aWNvbicpO1xudmFyIGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xudmFyIGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcblxudmFyIHJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2luZGV4Jyk7XG52YXIgdXNlcnMgPSByZXF1aXJlKCcuL3JvdXRlcy91c2VycycpO1xuXG52YXIgYXBwID0gZXhwcmVzcygpO1xuYXBwLnNldCgndmlld3MnLCAnLi9kaXN0L3NlcnZlci92aWV3cycpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnamFkZScpO1xuLy9hcHAudXNlKGZhdmljb24ocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycsICdmYXZpY29uLmljbycpKSk7XG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy4vZGlzdC9wdWJsaWMnKSk7XG5cbmFwcC51c2UoJy8nLCByb3V0ZXMpO1xuYXBwLnVzZSgnL3VzZXJzJywgdXNlcnMpO1xuXG4vLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxuYXBwLnVzZShmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdOb3QgRm91bmQnKTtcbiAgZXJyLnN0YXR1cyA9IDQwNDtcbiAgbmV4dChlcnIpO1xufSk7XG5cbi8vIGVycm9yIGhhbmRsZXJzXG5cbi8vIGRldmVsb3BtZW50IGVycm9yIGhhbmRsZXJcbi8vIHdpbGwgcHJpbnQgc3RhY2t0cmFjZVxuaWYgKGFwcC5nZXQoJ2VudicpID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGFwcC51c2UoZnVuY3Rpb24oZXJyLCByZXEsIHJlcywgbmV4dCkge1xuICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xuICAgIHJlcy5yZW5kZXIoJ2Vycm9yJywge1xuICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICBlcnJvcjogZXJyXG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwcm9kdWN0aW9uIGVycm9yIGhhbmRsZXJcbi8vIG5vIHN0YWNrdHJhY2VzIGxlYWtlZCB0byB1c2VyXG5hcHAudXNlKGZ1bmN0aW9uKGVyciwgcmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gIHJlcy5yZW5kZXIoJ2Vycm9yJywge1xuICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgIGVycm9yOiB7fVxuICB9KTtcbn0pO1xuXG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdnZW5lcmF0b3I6c2VydmVyJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbnZhciBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8ICczMDAwJyk7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG52YXIgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcbnNlcnZlci5saXN0ZW4ocG9ydCk7XG5zZXJ2ZXIub24oJ2Vycm9yJywgb25FcnJvcik7XG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIG9uTGlzdGVuaW5nKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWwpIHtcbiAgdmFyIHBvcnQgPSBwYXJzZUludCh2YWwsIDEwKTtcblxuICBpZiAoaXNOYU4ocG9ydCkpIHtcbiAgICAvLyBuYW1lZCBwaXBlXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGlmIChwb3J0ID49IDApIHtcbiAgICAvLyBwb3J0IG51bWJlclxuICAgIHJldHVybiBwb3J0O1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICBpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gJ2xpc3RlbicpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIHZhciBiaW5kID0gdHlwZW9mIHBvcnQgPT09ICdzdHJpbmcnXG4gICAgPyAnUGlwZSAnICsgcG9ydFxuICAgIDogJ1BvcnQgJyArIHBvcnQ7XG5cbiAgLy8gaGFuZGxlIHNwZWNpZmljIGxpc3RlbiBlcnJvcnMgd2l0aCBmcmllbmRseSBtZXNzYWdlc1xuICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbiAgICBjYXNlICdFQUNDRVMnOlxuICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgJyByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzJyk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFQUREUklOVVNFJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYmluZCArICcgaXMgYWxyZWFkeSBpbiB1c2UnKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuZnVuY3Rpb24gb25MaXN0ZW5pbmcoKSB7XG4gIHZhciBhZGRyID0gc2VydmVyLmFkZHJlc3MoKTtcbiAgdmFyIGJpbmQgPSB0eXBlb2YgYWRkciA9PT0gJ3N0cmluZydcbiAgICA/ICdwaXBlICcgKyBhZGRyXG4gICAgOiAncG9ydCAnICsgYWRkci5wb3J0O1xuICBkZWJ1ZygnTGlzdGVuaW5nIG9uICcgKyBiaW5kKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZlci9hcHAuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImV4cHJlc3NcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInNlcnZlLWZhdmljb25cIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibW9yZ2FuXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCJcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qIEdFVCBob21lIHBhZ2UuICovXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcblxuXHR2YXIgY28gPSByZXF1aXJlKCdjbycpO1xuXHR2YXIgdGh1bmtpZnkgPSByZXF1aXJlIChcInRodW5raWZ5XCIpXG5cblx0ZnVuY3Rpb24gc2xlZXAocGFyYW0sIGNhbGxiYWNrKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKG51bGwsIGBJIHdva2UgdXAgKCR7cGFyYW19KSBhdCBgICsgbmV3IERhdGUoKSk7XG5cdFx0fSwgMTAwMCk7XG5cdH1cblx0dmFyIHNsZWVwID0gdGh1bmtpZnkoc2xlZXApO1xuXHRcblx0Y28oZnVuY3Rpb24gKigpIHtcblx0XHRjb25zb2xlLmxvZyhcIjE6XCIsIHlpZWxkIHNsZWVwKDEpKTtcblx0XHRjb25zb2xlLmxvZyhcIjI6XCIsIHlpZWxkIHNsZWVwKDIpKTtcblx0XHRjb25zb2xlLmxvZyhcIjM6XCIsIHlpZWxkIHNsZWVwKDMpKTtcblx0XHRjb25zb2xlLmxvZyhcIjQ6XCIsIHlpZWxkIHNsZWVwKDQpKTtcblx0XHRjb25zb2xlLmxvZyhcIjU6XCIsIHlpZWxkIHNsZWVwKDUpKTtcblx0fSlcblxuXHRyZXMucmVuZGVyKCdpbmRleCcsIHsgdGl0bGU6ICdFeHByZXNzJyB9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZlci9yb3V0ZXMvaW5kZXguanNcbiAqKi8iLCJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgcmVzb3VyY2UnKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZlci9yb3V0ZXMvdXNlcnMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZGVidWdcIlxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJodHRwXCJcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vKipcbiAqIHNsaWNlKCkgcmVmZXJlbmNlLlxuICovXG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuLyoqXG4gKiBFeHBvc2UgYGNvYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvWydkZWZhdWx0J10gPSBjby5jbyA9IGNvO1xuXG4vKipcbiAqIFdyYXAgdGhlIGdpdmVuIGdlbmVyYXRvciBgZm5gIGludG8gYVxuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcHJvbWlzZS5cbiAqIFRoaXMgaXMgYSBzZXBhcmF0ZSBmdW5jdGlvbiBzbyB0aGF0XG4gKiBldmVyeSBgY28oKWAgY2FsbCBkb2Vzbid0IGNyZWF0ZSBhIG5ldyxcbiAqIHVubmVjZXNzYXJ5IGNsb3N1cmUuXG4gKlxuICogQHBhcmFtIHtHZW5lcmF0b3JGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5jby53cmFwID0gZnVuY3Rpb24gKGZuKSB7XG4gIGNyZWF0ZVByb21pc2UuX19nZW5lcmF0b3JGdW5jdGlvbl9fID0gZm47XG4gIHJldHVybiBjcmVhdGVQcm9taXNlO1xuICBmdW5jdGlvbiBjcmVhdGVQcm9taXNlKCkge1xuICAgIHJldHVybiBjby5jYWxsKHRoaXMsIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG59O1xuXG4vKipcbiAqIEV4ZWN1dGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBvciBhIGdlbmVyYXRvclxuICogYW5kIHJldHVybiBhIHByb21pc2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNvKGdlbikge1xuICB2YXIgY3R4ID0gdGhpcztcbiAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAvLyB3ZSB3cmFwIGV2ZXJ5dGhpbmcgaW4gYSBwcm9taXNlIHRvIGF2b2lkIHByb21pc2UgY2hhaW5pbmcsXG4gIC8vIHdoaWNoIGxlYWRzIHRvIG1lbW9yeSBsZWFrIGVycm9ycy5cbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90ai9jby9pc3N1ZXMvMTgwXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAodHlwZW9mIGdlbiA9PT0gJ2Z1bmN0aW9uJykgZ2VuID0gZ2VuLmFwcGx5KGN0eCwgYXJncyk7XG4gICAgaWYgKCFnZW4gfHwgdHlwZW9mIGdlbi5uZXh0ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gcmVzb2x2ZShnZW4pO1xuXG4gICAgb25GdWxmaWxsZWQoKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IHJlc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICogQGFwaSBwcml2YXRlXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiBvbkZ1bGZpbGxlZChyZXMpIHtcbiAgICAgIHZhciByZXQ7XG4gICAgICB0cnkge1xuICAgICAgICByZXQgPSBnZW4ubmV4dChyZXMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgfVxuICAgICAgbmV4dChyZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICogQGFwaSBwcml2YXRlXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiBvblJlamVjdGVkKGVycikge1xuICAgICAgdmFyIHJldDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldCA9IGdlbi50aHJvdyhlcnIpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgfVxuICAgICAgbmV4dChyZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmV4dCB2YWx1ZSBpbiB0aGUgZ2VuZXJhdG9yLFxuICAgICAqIHJldHVybiBhIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmV0XG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIG5leHQocmV0KSB7XG4gICAgICBpZiAocmV0LmRvbmUpIHJldHVybiByZXNvbHZlKHJldC52YWx1ZSk7XG4gICAgICB2YXIgdmFsdWUgPSB0b1Byb21pc2UuY2FsbChjdHgsIHJldC52YWx1ZSk7XG4gICAgICBpZiAodmFsdWUgJiYgaXNQcm9taXNlKHZhbHVlKSkgcmV0dXJuIHZhbHVlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgcmV0dXJuIG9uUmVqZWN0ZWQobmV3IFR5cGVFcnJvcignWW91IG1heSBvbmx5IHlpZWxkIGEgZnVuY3Rpb24sIHByb21pc2UsIGdlbmVyYXRvciwgYXJyYXksIG9yIG9iamVjdCwgJ1xuICAgICAgICArICdidXQgdGhlIGZvbGxvd2luZyBvYmplY3Qgd2FzIHBhc3NlZDogXCInICsgU3RyaW5nKHJldC52YWx1ZSkgKyAnXCInKSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgYHlpZWxkYGVkIHZhbHVlIGludG8gYSBwcm9taXNlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IG9ialxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRvUHJvbWlzZShvYmopIHtcbiAgaWYgKCFvYmopIHJldHVybiBvYmo7XG4gIGlmIChpc1Byb21pc2Uob2JqKSkgcmV0dXJuIG9iajtcbiAgaWYgKGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqKSB8fCBpc0dlbmVyYXRvcihvYmopKSByZXR1cm4gY28uY2FsbCh0aGlzLCBvYmopO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygb2JqKSByZXR1cm4gdGh1bmtUb1Byb21pc2UuY2FsbCh0aGlzLCBvYmopO1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSByZXR1cm4gYXJyYXlUb1Byb21pc2UuY2FsbCh0aGlzLCBvYmopO1xuICBpZiAoaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iamVjdFRvUHJvbWlzZS5jYWxsKHRoaXMsIG9iaik7XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHRodW5rIHRvIGEgcHJvbWlzZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRodW5rVG9Qcm9taXNlKGZuKSB7XG4gIHZhciBjdHggPSB0aGlzO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZuLmNhbGwoY3R4LCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikgcmVzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmVzb2x2ZShyZXMpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIFwieWllbGRhYmxlc1wiIHRvIGEgcHJvbWlzZS5cbiAqIFVzZXMgYFByb21pc2UuYWxsKClgIGludGVybmFsbHkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gb2JqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYXJyYXlUb1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChvYmoubWFwKHRvUHJvbWlzZSwgdGhpcykpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gb2JqZWN0IG9mIFwieWllbGRhYmxlc1wiIHRvIGEgcHJvbWlzZS5cbiAqIFVzZXMgYFByb21pc2UuYWxsKClgIGludGVybmFsbHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG9iamVjdFRvUHJvbWlzZShvYmope1xuICB2YXIgcmVzdWx0cyA9IG5ldyBvYmouY29uc3RydWN0b3IoKTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIHByb21pc2UgPSB0b1Byb21pc2UuY2FsbCh0aGlzLCBvYmpba2V5XSk7XG4gICAgaWYgKHByb21pc2UgJiYgaXNQcm9taXNlKHByb21pc2UpKSBkZWZlcihwcm9taXNlLCBrZXkpO1xuICAgIGVsc2UgcmVzdWx0c1trZXldID0gb2JqW2tleV07XG4gIH1cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZGVmZXIocHJvbWlzZSwga2V5KSB7XG4gICAgLy8gcHJlZGVmaW5lIHRoZSBrZXkgaW4gdGhlIHJlc3VsdFxuICAgIHJlc3VsdHNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICBwcm9taXNlcy5wdXNoKHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXN1bHRzW2tleV0gPSByZXM7XG4gICAgfSkpO1xuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBwcm9taXNlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiAnZnVuY3Rpb24nID09IHR5cGVvZiBvYmoudGhlbjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0dlbmVyYXRvcihvYmopIHtcbiAgcmV0dXJuICdmdW5jdGlvbicgPT0gdHlwZW9mIG9iai5uZXh0ICYmICdmdW5jdGlvbicgPT0gdHlwZW9mIG9iai50aHJvdztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbihvYmopIHtcbiAgdmFyIGNvbnN0cnVjdG9yID0gb2JqLmNvbnN0cnVjdG9yO1xuICBpZiAoIWNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG4gIGlmICgnR2VuZXJhdG9yRnVuY3Rpb24nID09PSBjb25zdHJ1Y3Rvci5uYW1lIHx8ICdHZW5lcmF0b3JGdW5jdGlvbicgPT09IGNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGlzR2VuZXJhdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIHBsYWluIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIE9iamVjdCA9PSB2YWwuY29uc3RydWN0b3I7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jby9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5cbi8qKlxuICogRXhwb3NlIGB0aHVua2lmeSgpYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRodW5raWZ5O1xuXG4vKipcbiAqIFdyYXAgYSByZWd1bGFyIGNhbGxiYWNrIGBmbmAgYXMgYSB0aHVuay5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHRodW5raWZ5KGZuKXtcbiAgYXNzZXJ0KCdmdW5jdGlvbicgPT0gdHlwZW9mIGZuLCAnZnVuY3Rpb24gcmVxdWlyZWQnKTtcblxuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICB2YXIgY3R4ID0gdGhpcztcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihkb25lKXtcbiAgICAgIHZhciBjYWxsZWQ7XG5cbiAgICAgIGFyZ3MucHVzaChmdW5jdGlvbigpe1xuICAgICAgICBpZiAoY2FsbGVkKSByZXR1cm47XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGRvbmUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmbi5hcHBseShjdHgsIGFyZ3MpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGRvbmUoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90aHVua2lmeS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFzc2VydFwiXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=