(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormioContrib"] = factory();
	else
		root["FormioContrib"] = factory();
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ \"./lib/templates/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    templates: _templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n\n//# sourceURL=webpack://FormioContrib/./lib/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkmatrix/form.ejs.js":
/*!*********************************************************!*\
  !*** ./lib/templates/bootstrap/checkmatrix/form.ejs.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<table class=\"' +\n((__t = ( ctx.tableClass )) == null ? '' : __t) +\n'\">\\n    <tbody>\\n        ';\n for (let i = 0; i < ctx.component.numRows; i++) { ;\n__p += '\\n            <tr>\\n                ';\n for (let j = 0; j < ctx.component.numCols; j++) { ;\n__p += '\\n                    <td>' +\n((__t = ( ctx.renderCell(i, j) )) == null ? '' : __t) +\n'</td>\\n                ';\n } ;\n__p += '\\n            </tr>\\n        ';\n } ;\n__p += '\\n    </tbody>\\n</table>\\n';\nreturn __p\n}\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/bootstrap/checkmatrix/form.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkmatrix/index.js":
/*!******************************************************!*\
  !*** ./lib/templates/bootstrap/checkmatrix/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.ejs */ \"./lib/templates/bootstrap/checkmatrix/form.ejs.js\");\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_ejs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ form: _form_ejs__WEBPACK_IMPORTED_MODULE_0___default.a });\n\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/bootstrap/checkmatrix/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/index.js":
/*!******************************************!*\
  !*** ./lib/templates/bootstrap/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkmatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkmatrix */ \"./lib/templates/bootstrap/checkmatrix/index.js\");\n/* harmony import */ var _survey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey */ \"./lib/templates/bootstrap/survey/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    checkmatrix: _checkmatrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    survey: _survey__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/bootstrap/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/survey/form.ejs.js":
/*!****************************************************!*\
  !*** ./lib/templates/bootstrap/survey/form.ejs.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<table class=\"table table-striped table-bordered test\" aria-labelledby=\"l-' +\n((__t = (ctx.instance.id)) == null ? '' : __t) +\n'-' +\n((__t = (ctx.component.key)) == null ? '' : __t) +\n'\">\\n  <thead>\\n    <tr>\\n      <th>test</th>\\n      ';\n ctx.component.values.forEach(function(value) { ;\n__p += '\\n      <th style=\"text-align: center;\">\\n        ' +\n((__t = (ctx.t(value.label, { _userInput: true }))) == null ? '' : __t) +\n'\\n        ';\n if (value.tooltip) { ;\n__p += '\\n          <i ref=\"tooltip\" class=\"' +\n((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +\n' text-muted\" data-tooltip=\"' +\n((__t = (value.tooltip)) == null ? '' : __t) +\n'\"></i>\\n        ';\n } ;\n__p += '\\n      </th>\\n      ';\n }) ;\n__p += '\\n    </tr>\\n  </thead>\\n  <tbody>\\n    ';\n ctx.component.questions.forEach(function(question) { ;\n__p += '\\n    <tr>\\n      <td>\\n        ' +\n((__t = (ctx.t(question.label))) == null ? '' : __t) +\n'\\n        ';\n if (question.tooltip) { ;\n__p += '\\n          <i ref=\"tooltip\" class=\"' +\n((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +\n' text-muted\" data-tooltip=\"' +\n((__t = (question.tooltip)) == null ? '' : __t) +\n'\"></i>\\n        ';\n } ;\n__p += '\\n      </td>\\n      ';\n ctx.component.values.forEach(function(value) { ;\n__p += '\\n      <td style=\"text-align: center;\">\\n        <input type=\"radio\" name=\"' +\n((__t = ( ctx.self.getInputName(question) )) == null ? '' : __t) +\n'\" value=\"' +\n((__t = (value.value)) == null ? '' : __t) +\n'\" id=\"' +\n((__t = (ctx.key)) == null ? '' : __t) +\n'-' +\n((__t = (question.value)) == null ? '' : __t) +\n'-' +\n((__t = (value.value)) == null ? '' : __t) +\n'\" ref=\"input\">\\n      </td>\\n      ';\n }) ;\n__p += '\\n    </tr>\\n    ';\n }) ;\n__p += '\\n  </tbody>\\n</table>';\nreturn __p\n}\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/bootstrap/survey/form.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/survey/html.ejs.js":
/*!****************************************************!*\
  !*** ./lib/templates/bootstrap/survey/html.ejs.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<table class=\"table table-striped table-bordered test\">\\n  <tbody>\\n    ';\n ctx.component.questions.forEach(function(question) { ;\n__p += '\\n    <tr>\\n      <th>' +\n((__t = (ctx.t(question.label))) == null ? '' : __t) +\n'</th>\\n      <td>\\n      ';\n ctx.component.values.forEach(function(item) { ;\n__p += '\\n        ';\n if (ctx.value && ctx.value.hasOwnProperty(question.value) && ctx.value[question.value] === item.value) { ;\n__p += '\\n          ' +\n((__t = (ctx.t(item.label))) == null ? '' : __t) +\n'\\n        ';\n } ;\n__p += '\\n      ';\n }) ;\n__p += '\\n      </td>\\n    </tr>\\n    ';\n }) ;\n__p += '\\n  </tbody>\\n</table>';\nreturn __p\n}\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/bootstrap/survey/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/survey/index.js":
/*!*************************************************!*\
  !*** ./lib/templates/bootstrap/survey/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.ejs */ \"./lib/templates/bootstrap/survey/form.ejs.js\");\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_ejs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _html_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.ejs */ \"./lib/templates/bootstrap/survey/html.ejs.js\");\n/* harmony import */ var _html_ejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_html_ejs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ form: _form_ejs__WEBPACK_IMPORTED_MODULE_0___default.a, html: _html_ejs__WEBPACK_IMPORTED_MODULE_1___default.a });\n\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/bootstrap/survey/index.js?");

/***/ }),

/***/ "./lib/templates/index.js":
/*!********************************!*\
  !*** ./lib/templates/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ \"./lib/templates/bootstrap/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    bootstrap: _bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n});\n\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/index.js?");

/***/ })

/******/ })["default"];
});