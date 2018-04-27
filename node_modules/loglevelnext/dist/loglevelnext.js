(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["log"] = factory();
	else
		root["log"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./factory/PrefixFactory.js":
/*!**********************************!*\
  !*** ./factory/PrefixFactory.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MethodFactory = __webpack_require__(/*! ../lib/MethodFactory */ \"./lib/MethodFactory.js\");\n\nvar defaults = {\n  level: function level(opts) {\n    return '[' + opts.level + ']';\n  },\n  name: function name(opts) {\n    return opts.logger.name;\n  },\n  template: '{{time}} {{level}} ',\n  time: function time() {\n    return new Date().toTimeString().split(' ')[0];\n  }\n};\n\nmodule.exports = function (_MethodFactory) {\n  _inherits(PrefixFactory, _MethodFactory);\n\n  function PrefixFactory(logger, options) {\n    _classCallCheck(this, PrefixFactory);\n\n    var _this = _possibleConstructorReturn(this, (PrefixFactory.__proto__ || Object.getPrototypeOf(PrefixFactory)).call(this, logger));\n\n    _this.options = _extends({}, defaults, options);\n    return _this;\n  }\n\n  _createClass(PrefixFactory, [{\n    key: 'interpolate',\n    value: function interpolate(level) {\n      var _this2 = this;\n\n      return this.options.template.replace(/{{([^{}]*)}}/g, function (stache, prop) {\n        var fn = _this2.options[prop];\n\n        if (fn) {\n          return fn({ level: level, logger: _this2.logger });\n        }\n\n        return stache;\n      });\n    }\n  }, {\n    key: 'make',\n    value: function make(methodName) {\n      var _this3 = this;\n\n      var og = _get(PrefixFactory.prototype.__proto__ || Object.getPrototypeOf(PrefixFactory.prototype), 'make', this).call(this, methodName);\n\n      return function () {\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        var output = _this3.interpolate(methodName);\n        var first = args[0];\n\n\n        if (typeof first === 'string') {\n          args[0] = output + first;\n        } else {\n          args.unshift(output);\n        }\n\n        og.apply(undefined, args);\n      };\n    }\n  }]);\n\n  return PrefixFactory;\n}(MethodFactory);\n\n//////////////////\n// WEBPACK FOOTER\n// ./factory/PrefixFactory.js\n// module id = ./factory/PrefixFactory.js\n// module chunks = main\n\n//# sourceURL=webpack://log/./factory/PrefixFactory.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* global window: true */\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar LogLevel = __webpack_require__(/*! ./lib/LogLevel */ \"./lib/LogLevel.js\");\nvar MethodFactory = __webpack_require__(/*! ./lib/MethodFactory */ \"./lib/MethodFactory.js\");\nvar PrefixFactory = __webpack_require__(/*! ./factory/PrefixFactory */ \"./factory/PrefixFactory.js\");\n\nvar defaultLogger = new LogLevel({ name: 'default' });\nvar cache = { default: defaultLogger };\n\n// Grab the current global log variable in case of overwrite\nvar existing = typeof window !== 'undefined' ? window.log : null;\n\nmodule.exports = _extends(defaultLogger, {\n\n  get factories() {\n    return {\n      MethodFactory: MethodFactory,\n      PrefixFactory: PrefixFactory\n    };\n  },\n\n  get loggers() {\n    return cache;\n  },\n\n  getLogger: function getLogger(options) {\n    if (typeof options === 'string') {\n      options = { name: options };\n    }\n\n    if (!options.id) {\n      options.id = options.name;\n    }\n\n    var _options = options,\n        name = _options.name,\n        id = _options.id;\n\n    var defaults = { level: defaultLogger.level };\n\n    if (typeof name !== 'string' || !name || !name.length) {\n      throw new TypeError('You must supply a name when creating a logger.');\n    }\n\n    var logger = cache[id];\n    if (!logger) {\n      logger = new LogLevel(_extends({}, defaults, options));\n      cache[id] = logger;\n    }\n    return logger;\n  },\n  noConflict: function noConflict() {\n    if (typeof window !== 'undefined' && window.log === defaultLogger) {\n      window.log = existing;\n    }\n\n    return defaultLogger;\n  }\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = ./index.js\n// module chunks = main\n\n//# sourceURL=webpack://log/./index.js?");

/***/ }),

/***/ "./lib/LogLevel.js":
/*!*************************!*\
  !*** ./lib/LogLevel.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* global window: true */\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PrefixFactory = __webpack_require__(/*! ../factory/PrefixFactory */ \"./factory/PrefixFactory.js\");\nvar MethodFactory = __webpack_require__(/*! ./MethodFactory */ \"./lib/MethodFactory.js\");\n\nvar defaults = {\n  factory: null,\n  level: 'warn',\n  name: +new Date(),\n  prefix: null\n};\n\nmodule.exports = function () {\n  function LogLevel(options) {\n    _classCallCheck(this, LogLevel);\n\n    // implement for some _very_ loose type checking. avoids getting into a\n    // circular require between MethodFactory and LogLevel\n    this.type = 'LogLevel';\n    this.options = _extends({}, defaults, options);\n    this.methodFactory = options.factory;\n\n    if (!this.methodFactory) {\n      var factory = options.prefix ? new PrefixFactory(this, options.prefix) : new MethodFactory(this);\n      this.methodFactory = factory;\n    }\n\n    if (!this.methodFactory.logger) {\n      this.methodFactory.logger = this;\n    }\n\n    this.name = options.name || '<unknown>';\n\n    // this.level is a setter, do this after setting up the factory\n    this.level = this.options.level;\n  }\n\n  _createClass(LogLevel, [{\n    key: 'disable',\n    value: function disable() {\n      this.level = this.levels.SILENT;\n    }\n  }, {\n    key: 'enable',\n    value: function enable() {\n      this.level = this.levels.TRACE;\n    }\n  }, {\n    key: 'factory',\n    get: function get() {\n      return this.methodFactory;\n    },\n    set: function set(factory) {\n      factory.logger = this;\n      this.methodFactory = factory;\n      this.methodFactory.replaceMethods(this.level);\n    }\n  }, {\n    key: 'level',\n    get: function get() {\n      return this.currentLevel;\n    },\n    set: function set(logLevel) {\n      var level = this.methodFactory.distillLevel(logLevel);\n\n      if (level == null) {\n        throw new Error('loglevelnext: setLevel() called with invalid level: ' + logLevel);\n      }\n\n      this.currentLevel = level;\n      this.methodFactory.replaceMethods(level);\n\n      if (typeof console === 'undefined' && level < this.levels.SILENT) {\n        // eslint-disable-next-line no-console\n        console.warn('loglevelnext: console is undefined. The log will produce no output.');\n      }\n    }\n  }, {\n    key: 'levels',\n    get: function get() {\n      // eslint-disable-line class-methods-use-this\n      return this.methodFactory.levels;\n    }\n  }]);\n\n  return LogLevel;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/LogLevel.js\n// module id = ./lib/LogLevel.js\n// module chunks = main\n\n//# sourceURL=webpack://log/./lib/LogLevel.js?");

/***/ }),

/***/ "./lib/MethodFactory.js":
/*!******************************!*\
  !*** ./lib/MethodFactory.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar noop = function noop() {};\nvar levels = Symbol('valid log levels');\nvar instance = Symbol('a log instance');\n\nmodule.exports = function () {\n  function MethodFactory(logger) {\n    _classCallCheck(this, MethodFactory);\n\n    this[instance] = logger;\n    this[levels] = {\n      TRACE: 0,\n      DEBUG: 1,\n      INFO: 2,\n      WARN: 3,\n      ERROR: 4,\n      SILENT: 5\n    };\n  }\n\n  _createClass(MethodFactory, [{\n    key: 'bindMethod',\n\n\n    // eslint-disable-next-line class-methods-use-this\n    value: function bindMethod(obj, methodName) {\n      var method = obj[methodName];\n      if (typeof method.bind === 'function') {\n        return method.bind(obj);\n      }\n\n      try {\n        return Function.prototype.bind.call(method, obj);\n      } catch (e) {\n        // Missing bind shim or IE8 + Modernizr, fallback to wrapping\n        return function result() {\n          // eslint-disable-next-line prefer-rest-params\n          return Function.prototype.apply.apply(method, [obj, arguments]);\n        };\n      }\n    }\n  }, {\n    key: 'distillLevel',\n    value: function distillLevel(level) {\n      var result = level;\n\n      if (typeof result === 'string' && typeof this.levels[result.toUpperCase()] !== 'undefined') {\n        result = this.levels[result.toUpperCase()];\n      }\n\n      if (this.levelValid(result)) {\n        return result;\n      }\n    }\n  }, {\n    key: 'levelValid',\n    value: function levelValid(level) {\n      if (typeof level === 'number' && level >= 0 && level <= this.levels.SILENT) {\n        return true;\n      }\n\n      return false;\n    }\n\n    /**\n     * Build the best logging method possible for this env\n     * Wherever possible we want to bind, not wrap, to preserve stack traces.\n     * Since we're targeting modern browsers, there's no need to wait for the\n     * console to become available.\n     */\n    // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: 'make',\n    value: function make(methodName) {\n      if (methodName === 'debug') {\n        methodName = 'log';\n      }\n\n      /* eslint-disable no-console */\n      if (typeof console[methodName] !== 'undefined') {\n        return this.bindMethod(console, methodName);\n      } else if (typeof console.log !== 'undefined') {\n        return this.bindMethod(console, 'log');\n      }\n\n      /* eslint-enable no-console */\n      return noop;\n    }\n  }, {\n    key: 'replaceMethods',\n    value: function replaceMethods(logLevel) {\n      var level = this.distillLevel(logLevel);\n\n      if (level == null) {\n        throw new Error('loglevelnext: replaceMethods() called with invalid level: ' + logLevel);\n      }\n\n      if (!this.logger || this.logger.type !== 'LogLevel') {\n        throw new TypeError('loglevelnext: Logger is undefined or invalid. Please specify a valid Logger instance.');\n      }\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var methodName = _step.value;\n          var methodLevel = this.levels[methodName.toUpperCase()];\n\n\n          this.logger[methodName] = methodLevel < level ? noop : this.make(methodName);\n        }\n\n        // Define log.log as an alias for log.debug\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      this.logger.log = this.logger.debug;\n    }\n  }, {\n    key: 'levels',\n    get: function get() {\n      return this[levels];\n    }\n  }, {\n    key: 'logger',\n    get: function get() {\n      return this[instance];\n    },\n    set: function set(logger) {\n      this[instance] = logger;\n    }\n  }, {\n    key: 'methods',\n    get: function get() {\n      return Object.keys(this.levels).map(function (key) {\n        return key.toLowerCase();\n      }).filter(function (key) {\n        return key !== 'silent';\n      });\n    }\n  }]);\n\n  return MethodFactory;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/MethodFactory.js\n// module id = ./lib/MethodFactory.js\n// module chunks = main\n\n//# sourceURL=webpack://log/./lib/MethodFactory.js?");

/***/ })

/******/ });
});