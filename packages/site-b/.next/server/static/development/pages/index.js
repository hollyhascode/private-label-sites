module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "../../node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@erig/common/components/BrandPicker.jsx":
/*!**************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/BrandPicker.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\BrandPicker.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(({
  spacing
}) => ({
  action: {
    right: spacing(1)
  }
}));

const BrandPicker = ({
  brands
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, brands.map(({
    active,
    title
  }) => {
    const color = active ? "primary" : "textSecondary";
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      button: true,
      key: title,
      dense: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
      primary: title,
      primaryTypographyProps: {
        color
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.action,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {
      color: "primary",
      checked: active,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    })));
  }));
};

BrandPicker.propTypes = {
  brands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }))
};
BrandPicker.defaultProps = {
  brands: []
};
BrandPicker.data = [{
  title: "Adidas"
}, {
  title: "Nike",
  active: true
}, {
  title: "Balenciaga"
}, {
  title: "NB Balance"
}, {
  title: "Sketcher"
}];
/* harmony default export */ __webpack_exports__["default"] = (BrandPicker);

/***/ }),

/***/ "../../node_modules/@erig/common/components/CategoryPicker.jsx":
/*!*****************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/CategoryPicker.jsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _extensions_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\CategoryPicker.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CategoryPicker = ({
  categories
}) => __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, categories.map(({
  active,
  title,
  amount
}) => {
  const color = active ? "primary" : "textSecondary";
  return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    key: title,
    dense: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    primary: title,
    primaryTypographyProps: {
      color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, amount));
}));

CategoryPicker.propTypes = {
  categories: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }))
};
CategoryPicker.defaultProps = {
  categories: []
};
CategoryPicker.data = [{
  title: "Lifestyle",
  amount: 56
}, {
  title: "Running",
  amount: 1,
  active: true
}, {
  title: "Basketball",
  amount: 23
}, {
  title: "Soccer",
  amount: 40
}, {
  title: "Baseball",
  amount: 11
}, {
  title: "Training",
  amount: 2
}, {
  title: "Golf",
  amount: 8
}, {
  title: "Skateboarding",
  amount: 15
}, {
  title: "Football",
  amount: 14
}];
/* harmony default export */ __webpack_exports__["default"] = (CategoryPicker);

/***/ }),

/***/ "../../node_modules/@erig/common/components/ColorPicker.jsx":
/*!**************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/ColorPicker.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _extensions_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extensions/Icon */ "../../node_modules/@erig/common/extensions/Icon.jsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\ColorPicker.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  root: {
    width: 32,
    height: 32,
    borderRadius: "50%"
  },
  check: {
    fontSize: 22,
    lineHeight: "32px"
  }
}));

const Color = ({
  color,
  checked
}) => {
  const classes = useStyles();
  const isWhite = color.toLowerCase() === "#ffffff" || color.toLowerCase() === "fff" || color === "white";
  const border = isWhite ? "1px solid #a5a5a5" : "none";
  return __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.root,
    style: {
      backgroundColor: color,
      border
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, checked && __jsx(_extensions_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.check,
    inverted: !isWhite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "check")));
};

Color.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Color.defaultProps = {
  checked: false
};

const ColorPicker = ({
  colors
}) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
  container: true,
  spacing: 2,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, colors.map(color => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
  key: color.color,
  item: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx(Color, _extends({}, color, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
})))));

ColorPicker.Color = Color;
ColorPicker.propTypes = {
  colors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }))
};
ColorPicker.defaultProps = {
  colors: []
};
ColorPicker.data = [{
  color: "#ffffff",
  checked: true
}, {
  color: "#000000",
  checked: true
}, {
  color: "#dd0500"
}, {
  color: "#dd7d00"
}, {
  color: "#dbdd00"
}, {
  color: "#00dd07"
}, {
  color: "#00dd9b"
}, {
  color: "#00ddc7",
  checked: true
}, {
  color: "#0065dd"
}, {
  color: "#4200dd"
}, {
  color: "#a600dd"
}, {
  color: "#dd00b8"
}];
/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "../../node_modules/@erig/common/components/EmailInput.jsx":
/*!*************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/EmailInput.jsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _extensions_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extensions/Button */ "../../node_modules/@erig/common/extensions/Button.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\EmailInput.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(({
  palette,
  spacing
}) => ({
  root: {
    boxShadow: "0 0 12px 0 rgba(0,0,0,0.12)",
    background: palette.common.white,
    borderRadius: 25,
    paddingLeft: spacing(2),
    fontSize: 14,
    minWidth: 300
  },
  iconButton: {
    flexShrink: 0
  }
}));

const EmailInput = () => {
  const classes = useStyles();
  return __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2___default.a, {
    placeholder: "example@gmail.com",
    classes: {
      root: classes.root
    },
    endAdornment: __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.iconButton,
      color: "primary",
      shape: "circular",
      icon: "fas fa-paper-plane",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  });
};

EmailInput.propTypes = {};
EmailInput.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (EmailInput);

/***/ }),

/***/ "../../node_modules/@erig/common/components/Expander.jsx":
/*!***********************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/Expander.jsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _extensions_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
/* harmony import */ var _extensions_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extensions/Icon */ "../../node_modules/@erig/common/extensions/Icon.jsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "@material-ui/icons/KeyboardArrowUp");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "@material-ui/icons/KeyboardArrowDown");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\Expander.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Expander = ({
  children,
  label
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => setOpen(!open),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, open ? __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }) : __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    disableTypography: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, label))), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2___default.a, {
    in: open,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
    pl: {
      xs: 2,
      md: 3
    },
    pb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, children)));
};

Expander.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
Expander.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Expander);

/***/ }),

/***/ "../../node_modules/@erig/common/components/Layout.jsx":
/*!*********************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/Layout.jsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmailInput */ "../../node_modules/@erig/common/components/EmailInput.jsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header */ "../../node_modules/@erig/common/components/header/index.jsx");
/* harmony import */ var _extensions_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\Layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









const url = // eslint-disable-next-line max-len
"https://fonts.googleapis.com/css?family=Poppins:200,400,500,700,900|Oswald:400,700&display=swap";
_extensions_Typography__WEBPACK_IMPORTED_MODULE_7__["default"].setSecondFamily("'Oswald', sans-serif");

const Layout = ({
  theme,
  globalStyles,
  children
}) => __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
  theme: theme,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: globalStyles.__hash,
  __self: undefined
}, globalStyles), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("link", {
  href: url,
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx(_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
  bgcolor: "common.white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, children, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
  bgcolor: "grey.200",
  textAlign: "center",
  position: "relative",
  zIndex: 0,
  pt: 10,
  pb: 5,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
  maxWidth: "sm",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
  spacing: "medium",
  secondFamily: true,
  weight: 500,
  gutterBottom: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "SUBSCRIBE TO OUR NEWSLETTER"), __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
  variant: "caption",
  display: "block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "To always stay update with our products, news, and special discounts"), __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
  variant: "caption",
  display: "block",
  bottomSpace: "medium",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "enter you email below"), __jsx(_EmailInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}))))));

Layout.propTypes = {};
Layout.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "../../node_modules/@erig/common/components/MegaMenu.jsx":
/*!***********************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/MegaMenu.jsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\MegaMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;















const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(({
  palette
}) => ({
  root: {
    margin: "0 auto",
    paddingTop: 8,
    height: 64
  },
  tabsRoot: {},
  tabsIndicator: {
    maxWidth: 56,
    transform: "translateX(52px)",
    backgroundColor: palette.grey[200]
  },
  tab: {
    color: palette.common.white,
    opacity: 1,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "1px",
    minWidth: 160
  },
  collapsed: {
    position: "absolute",
    left: 0,
    top: 64,
    width: "100%"
  },
  paper: {
    minHeight: 240
  },
  subheader: {
    fontWeight: "bold"
  },
  cover: {
    display: "block",
    height: "100%",
    width: "100%",
    objectFit: "cover",
    padding: "16px 16px 16px 0"
  },
  anchor: {
    color: "inherit",
    textDecoration: "inherit"
  }
}));

const MegaMenu = ({
  menus,
  subMenus,
  cover
}) => {
  const {
    0: tabIndex,
    1: setTabIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    onMouseLeave: () => setTabIndex(undefined),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9___default.a, {
    centered: true,
    classes: {
      root: classes.tabsRoot,
      indicator: classes.tabsIndicator
    },
    value: tabIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, menus.map((item, index) => __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: item.label,
    label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, __jsx("a", {
      className: classes.anchor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, item.label)),
    className: classes.tab,
    onMouseOver: () => setTabIndex(index),
    onFocus: () => setTabIndex(index),
    onClick: e => {
      e.preventDefault();
      router.push(item.href);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_0___default.a, {
    in: tabIndex >= 0,
    className: classes.collapsed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    elevation: 2,
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("img", {
    src: cover,
    alt: "cover",
    className: classes.cover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })), subMenus.map(({
    label,
    children
  }) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: label,
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.subheader,
      disableSticky: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, label),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, children.map(subLabel => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: subLabel,
    button: true,
    dense: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
    primary: subLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  })))))))))));
};

MegaMenu.propTypes = {
  menus: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired
  })),
  subMenus: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({})),
  cover: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
};
MegaMenu.defaultProps = {
  menus: [],
  subMenus: [],
  cover: // eslint-disable-next-line max-len
  "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=983&q=80"
};
/* harmony default export */ __webpack_exports__["default"] = (MegaMenu);

/***/ }),

/***/ "../../node_modules/@erig/common/components/MobileSelector.jsx":
/*!*****************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/MobileSelector.jsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _erig_common_extensions_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @erig/common/extensions/Icon */ "../../node_modules/@erig/common/extensions/Icon.jsx");
/* harmony import */ var _erig_common_extensions_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @erig/common/extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
/* harmony import */ var _CategoryPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CategoryPicker */ "../../node_modules/@erig/common/components/CategoryPicker.jsx");
/* harmony import */ var _Expander__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Expander */ "../../node_modules/@erig/common/components/Expander.jsx");
/* harmony import */ var _PricePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PricePicker */ "../../node_modules/@erig/common/components/PricePicker.jsx");
/* harmony import */ var _BrandPicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BrandPicker */ "../../node_modules/@erig/common/components/BrandPicker.jsx");
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ColorPicker */ "../../node_modules/@erig/common/components/ColorPicker.jsx");
/* harmony import */ var _SizePicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SizePicker */ "../../node_modules/@erig/common/components/SizePicker.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\MobileSelector.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const MobileSelector = () => {
  const {
    0: categoryOpened,
    1: setCategoryOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: filterOpened,
    1: setFilterOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    style: {
      borderRight: "1px solid #f0f0f0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    button: true,
    onClick: () => setCategoryOpened(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "CATEGORY"), __jsx(_erig_common_extensions_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "keyboard_arrow_down"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    button: true,
    onClick: () => setFilterOpened(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "FILTER"), __jsx(_erig_common_extensions_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "keyboard_arrow_down")))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    open: categoryOpened,
    onClose: () => setCategoryOpened(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: 300,
    p: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_erig_common_extensions_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    bottomSpace: "small",
    weight: "bold",
    secondFamily: true,
    size: "big",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Choose Category"), __jsx(_CategoryPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
    categories: _CategoryPicker__WEBPACK_IMPORTED_MODULE_9__["default"].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    anchor: "right",
    open: filterOpened,
    onClose: () => setFilterOpened(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: 300,
    py: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_erig_common_extensions_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    push: "left",
    bottomSpace: "small",
    weight: "bold",
    secondFamily: true,
    size: "big",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Adjust Filter"), __jsx(_Expander__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "PRICE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_PricePicker__WEBPACK_IMPORTED_MODULE_11__["default"], {
    min: 10,
    max: 400,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(_Expander__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "BRAND",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_BrandPicker__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brands: _BrandPicker__WEBPACK_IMPORTED_MODULE_12__["default"].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx(_Expander__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "COLOR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
    p: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(_ColorPicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
    colors: _ColorPicker__WEBPACK_IMPORTED_MODULE_13__["default"].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(_Expander__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "SIZE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
    p: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_SizePicker__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sizes: _SizePicker__WEBPACK_IMPORTED_MODULE_14__["default"].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }))));
};

MobileSelector.propTypes = {};
MobileSelector.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (MobileSelector);

/***/ }),

/***/ "../../node_modules/@erig/common/components/Pagination.jsx":
/*!*************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/Pagination.jsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _extensions_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extensions/Button */ "../../node_modules/@erig/common/extensions/Button.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\Pagination.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(({
  palette
}) => ({
  page: {
    display: "inline-block",
    width: 44,
    height: 44,
    lineHeight: "44px",
    borderLeft: "1px solid #f0f0f0",
    borderRight: "1px solid #f0f0f0",
    textDecoration: "none",
    color: palette.text.primary,
    "&:not(:first-of-type)": {
      marginLeft: -1
    },
    "&:hover": {
      background: palette.grey[200]
    }
  },
  activePage: {
    color: palette.common.white,
    background: palette.primary.main,
    "&:hover": {
      background: palette.primary.main
    }
  }
}));

const Pagination = ({
  rootBoxProps
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, rootBoxProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shape: "square",
    icon: "keyboard_arrow_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("a", {
    className: classes.page,
    href: "#1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "1"), __jsx("a", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.page, classes.activePage),
    href: "#2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "2"), __jsx("a", {
    className: classes.page,
    href: "#3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "3"), __jsx("a", {
    className: classes.page,
    href: "#4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "4"), __jsx("a", {
    className: classes.page,
    href: "#5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "5"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shape: "square",
    icon: "keyboard_arrow_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }))));
};

Pagination.propTypes = {
  rootBoxProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})
};
Pagination.defaultProps = {
  rootBoxProps: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "../../node_modules/@erig/common/components/PricePicker.jsx":
/*!**************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/PricePicker.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _extensions_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\PricePicker.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(({
  transitions
}) => ({
  value: ({
    dragging
  }) => ({
    opacity: dragging ? 1 : 0,
    transition: transitions.create(),
    position: "absolute",
    left: "50%",
    top: -20,
    transform: `translateX(-50%) scale(${dragging ? 1.2 : 1})`
  })
}));

const PricePicker = (_ref) => {
  let {
    min,
    max
  } = _ref,
      props = _objectWithoutProperties(_ref, ["min", "max"]);

  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100);
  const {
    0: dragging,
    1: setDragging
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const typographyProps = {
    size: "small",
    color: "textSecondary"
  };
  const classes = useStyles({
    dragging
  });
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pr: 2,
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    px: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    value: value,
    onChange: (e, val) => setValue(val),
    step: 10,
    min: min,
    max: max,
    thumb: __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
      bgcolor: "primary.main",
      borderRadius: "50%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.value,
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, value)),
    onDragStart: () => setDragging(true),
    onDragEnd: () => setDragging(false)
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, typographyProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), "$", min), __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, typographyProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), "$", max)));
};

PricePicker.propTypes = {
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
PricePicker.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (PricePicker);

/***/ }),

/***/ "../../node_modules/@erig/common/components/ProductAds.jsx":
/*!*************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/ProductAds.jsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _extensions_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
/* harmony import */ var _extensions_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extensions/Button */ "../../node_modules/@erig/common/extensions/Button.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\ProductAds.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(({
  palette,
  spacing
}) => ({
  bg: ({
    bgColor
  }) => _objectSpread({
    overflow: "hidden"
  }, bgColor === "purple1" && {
    backgroundColor: "#9380cc"
  }, {}, bgColor === "purple2" && {
    backgroundColor: "#be92cc"
  }),
  tag: {
    background: palette.common.white,
    padding: spacing(0, 1)
  },
  overline: {
    lineHeight: 1,
    color: "rgba(255, 255, 255, 0.87)"
  },
  image: ({
    contentSide,
    imageCentered
  }) => _objectSpread({
    maxWidth: "60%",
    position: "absolute",
    zIndex: 0,
    top: 0,
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
  }, imageCentered && {
    top: "50%",
    transform: "translateY(-50%)"
  }, {}, contentSide === "left" ? {
    right: 0
  } : {
    left: 0
  })
}));

const ProductAds = ({
  title,
  overline,
  tag,
  image,
  imageCentered,
  actionLabel,
  bgColor,
  contentSide,
  rootBoxProps,
  contentBoxProps
}) => {
  const classes = useStyles({
    bgColor,
    contentSide,
    imageCentered
  });
  const sides = {
    left: "left",
    right: "right"
  };
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    position: "relative",
    classes: {
      root: classes.bg
    },
    py: 3,
    px: {
      xs: 2,
      md: 3
    },
    height: "100%"
  }, rootBoxProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    textAlign: sides[contentSide],
    position: "relative",
    zIndex: 1
  }, contentSide === "right" && {
    ml: "auto"
  }, contentBoxProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), tag && __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.tag,
    display: "inline-block",
    bottomSpace: "medium",
    weight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, tag), overline && __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.overline,
    gutterBottom: true,
    variant: "overline",
    display: "block",
    weight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, overline), __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bottomSpace: "medium",
    inverted: true,
    secondFamily: true,
    weight: "bold",
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, title), __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    shape: "chubby",
    variant: "outlined",
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, actionLabel)), __jsx("img", {
    className: classes.image,
    alt: "product",
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }));
};

ProductAds.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  overline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  imageCentered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  actionLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentSide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["right", "left"]),
  rootBoxProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}),
  contentBoxProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})
};
ProductAds.defaultProps = {
  overline: "",
  tag: "",
  image: "",
  imageCentered: false,
  actionLabel: "MORE",
  bgColor: "",
  contentSide: "left",
  rootBoxProps: {},
  contentBoxProps: {}
};
ProductAds.test1 = {
  tag: "SALE",
  overline: "Jean Denim",
  title: "SALES COLLECTION 2018",
  actionLabel: "MORE",
  bgColor: "purple1",
  image: // eslint-disable-next-line max-len
  "https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16121006/Slim-Fit-Jean-PNG-Free-Download.png"
};
ProductAds.test2 = {
  tag: "NEW",
  overline: "Eye Glasses",
  title: "PREMIUM MOTTO LENS",
  actionLabel: "SHOP NOW",
  bgColor: "purple2",
  imageCentered: true,
  image: // eslint-disable-next-line max-len
  "https://www.solaris.fr/publicmedia/original/111/321/8/fr/e93d50dcaa554ab6e1d42e1c8d8da7de1f2e473b_190605049051_front_01_police_spl636_0568_55_pair.png"
};
/* harmony default export */ __webpack_exports__["default"] = (ProductAds);

/***/ }),

/***/ "../../node_modules/@erig/common/components/ProductCard.jsx":
/*!**************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/ProductCard.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductCardFront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCardFront */ "../../node_modules/@erig/common/components/ProductCardFront.jsx");
/* harmony import */ var _ProductCardBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCardBack */ "../../node_modules/@erig/common/components/ProductCardBack.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\ProductCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const ProductCard = props => {
  const {
    0: showed,
    1: setShowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative"
    },
    onFocus: () => setShowed(true),
    onMouseOver: () => setShowed(true),
    onMouseLeave: () => setShowed(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_ProductCardFront__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })), __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: showed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_ProductCardBack__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }))));
};

ProductCard.propTypes = {};
ProductCard.defaultProps = {};
ProductCard.data = [{
  name: "Nike Air Max Sequent 4 Shield",
  price: 145,
  title: "lifestyle",
  image: // eslint-disable-next-line max-len
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/knjjwmbkdlh2wrvyxrgt/air-max-sequent-4-shield-shoe-Kg4gLm.jpg"
}, {
  name: "Nike Vaporfly 4% Flynit",
  price: 249,
  image: // eslint-disable-next-line max-len
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/rlpfdp3vppliikmmv5lp/vaporfly-4-flyknit-running-shoe-Br70Kg.jpg"
}, {
  name: "Nike Air Trainer 3 QS",
  price: 129,
  image: // eslint-disable-next-line max-len
  "https://images.nike.com/is/image/DotCom/PDP_HERO_ZOOM/CJ1436_100_A_PREM/air-trainer-3-qs-shoe.jpg"
}, {
  name: "Yeezy Boost 700",
  price: 279,
  image: // eslint-disable-next-line max-len
  "https://media.sivasdescalzo.com/media/catalog/product/E/G/EG7596_sivasdescalzo-adidas-YEEZY-BOOST-700-EG7596-1.jpg"
}, {
  name: "Predator 19.1 Trainers",
  price: 109,
  image: // eslint-disable-next-line max-len
  "https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/c4163f6d9d9a482285daa9f50112f4cc_9366/Predator_19.1_Trainers_White_BC0556_01_standard.jpg"
}, {
  name: "Nemeziz Tango 18.1 Trainers",
  price: 109,
  image: // eslint-disable-next-line max-len
  "https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/8ff4f3b68a30474081f4a9b60111189a_9366/Nemeziz_Tango_18.1_Trainers_Blue_D98018_01_standard.jpg"
}, {
  name: "X 18.1 Firm Ground Boots",
  price: 129,
  image: // eslint-disable-next-line max-len
  "https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/49da0449f99c44fe847ca9b600e1482e_9366/X_18.1_Firm_Ground_Boots_Black_BB9346_01_standard.jpg"
}, {
  name: "Dame 5 Shoes",
  price: 89,
  image: // eslint-disable-next-line max-len
  "https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/13aa267673c54fe69200a99101535bf3_9366/Dame_5_Shoes_Turquoise_BB9314_01_standard.jpg"
}, {
  name: "POD-S3.1 Shoes",
  price: 99,
  image: // eslint-disable-next-line max-len
  "https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/2f488fe90ddf43fdbe77a8c100ca2bb3_9366/POD_S3.1_Shoes_Black_AQ1059_01_standard.jpg"
}, {
  name: "Nike Flex RN 2019",
  price: 85,
  image: // eslint-disable-next-line max-len
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qavgxezz3gcdechtgrkg/flex-rn-2019-mens-running-shoe-NPgrwv.jpg"
}, {
  name: "Air Jordan XXXIII",
  price: 175,
  image: // eslint-disable-next-line max-len
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/kpbgnt19ylkljmqwhsib/air-jordan-xxxiii-basketball-shoe-2hbkM1.jpg"
}, {
  name: "Nike Air Zoom Pegasus 35 By You",
  price: 140,
  image: // eslint-disable-next-line max-len
  "https://render.nikeid.com/ir/render/nikeidrender/PEG35su18_v1?obj=/s/shadow/shad&show&color=000000&obj=/s/g1&color=202020&show&obj=/s/g13&color=242424&show&obj=/s/g17&color=b8b2a2&show&obj=/s/g3&color=202020&show&obj=/s/g4&color=202020&show&obj=/s/g16&color=c78f5d&show&obj=/s/g15&color=141414&show&obj=/s/g7&color=141414&show&obj=/s/g2/metal&color=fff7e0&show&obj=/s/g11&color=535559&show&obj=/s/g14&color=303030&show&obj=/s/g10&color=535559&show&obj=/s/g18&color=333333&show&obj=/s/g12&color=ffffff&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=1500"
}];
/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "../../node_modules/@erig/common/components/ProductCardBack.jsx":
/*!******************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/ProductCardBack.jsx ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _extensions_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../extensions/Button */ "../../node_modules/@erig/common/extensions/Button.jsx");
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductInfo */ "../../node_modules/@erig/common/components/ProductInfo.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\ProductCardBack.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(({
  palette
}) => ({
  root: {
    backgroundColor: color__WEBPACK_IMPORTED_MODULE_3___default()(palette.primary.main).fade(0.3).toString(),
    boxShadow: `0 2px 12px 0 ${color__WEBPACK_IMPORTED_MODULE_3___default()(palette.primary.main).fade(0.2).toString()}`,
    zIndex: 2
  },
  productImage: {
    position: "relative",
    paddingBottom: "100%"
  },
  buyNow: {
    background: palette.common.white,
    boxShadow: `0 2px 6px 0 ${palette.text.secondary}`,
    "&:hover": {
      background: palette.common.white
    }
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}));
const ProductCardBack = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(({
  className,
  style,
  name,
  price
}, ref) => {
  const classes = useStyles();
  const iconProps = {
    shape: "circular",
    inverted: true,
    size: "big"
  };
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    ref: ref,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, classes.absolute, className),
    style: style,
    bgcolor: "common.white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    p: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.productImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.absolute,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    display: "flex",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, iconProps, {
    icon: "fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })), __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, iconProps, {
    icon: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })), __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, iconProps, {
    icon: "far fa-heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    only: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, iconProps, {
    icon: "far fa-share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "outlined",
    inverted: true,
    shape: "chubby",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Detail")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.buyNow,
    shape: "chubby",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Buy")))))), __jsx(_ProductInfo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inverted: true,
    name: name,
    price: price,
    rootBoxProps: {
      mt: "-3px",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }));
});
ProductCardBack.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}),
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
ProductCardBack.defaultProps = {
  className: "",
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ProductCardBack);

/***/ }),

/***/ "../../node_modules/@erig/common/components/ProductCardFront.jsx":
/*!*******************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/ProductCardFront.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductInfo */ "../../node_modules/@erig/common/components/ProductInfo.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\ProductCardFront.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(({
  palette
}) => ({
  buttonBase: {
    display: "inline-block",
    height: "100%",
    width: "100%"
  },
  productImage: {
    position: "relative",
    paddingBottom: "100%",
    overflow: "hidden",
    backgroundColor: palette.grey[100]
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    objectFit: "cover"
  }
}));

const ProductCardFront = ({
  name,
  price,
  image,
  bordered
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.buttonBase,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    height: "100%"
  }, bordered && {
    border: "1px solid #f0f0f0",
    borderTop: "none",
    marginLeft: "-1px",
    marginTop: "-1px"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
    p: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.productImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("img", {
    className: classes.img,
    src: image,
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }))), __jsx(_ProductInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: name,
    price: price,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })));
};

ProductCardFront.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bordered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ProductCardFront.defaultProps = {
  image: "",
  bordered: false
};
/* harmony default export */ __webpack_exports__["default"] = (ProductCardFront);

/***/ }),

/***/ "../../node_modules/@erig/common/components/ProductInfo.jsx":
/*!**************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/ProductInfo.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _erig_common_extensions_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @erig/common/extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\ProductInfo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const ProductInfo = ({
  name,
  price,
  inverted,
  rootBoxProps
}) => __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
  px: 2,
  pb: 2
}, rootBoxProps, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(_erig_common_extensions_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
  variant: "subtitle1",
  secondFamily: true,
  weight: "bold",
  gutterBottom: true,
  inverted: inverted,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, name), __jsx(_erig_common_extensions_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
  color: "primary",
  weight: "bold",
  inverted: inverted,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "$ ", price));

ProductInfo.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  inverted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rootBoxProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})
};
ProductInfo.defaultProps = {
  inverted: false,
  rootBoxProps: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ProductInfo);

/***/ }),

/***/ "../../node_modules/@erig/common/components/SizePicker.jsx":
/*!*************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/SizePicker.jsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _extensions_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\SizePicker.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(({
  palette,
  spacing
}) => ({
  root: ({
    checked
  }) => ({
    border: `1px solid ${checked ? palette.primary.main : palette.grey[500]}`,
    color: checked ? "#ffffff" : palette.text.primary,
    background: checked ? palette.primary.main : "unset",
    padding: spacing(0, 0.5),
    minWidth: 36
  })
}));

const Size = ({
  size,
  checked
}) => {
  const classes = useStyles({
    checked
  });
  return __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    display: "inline-block",
    secondFamily: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, size));
};

Size.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Size.defaultProps = {
  checked: false
};

const SizePicker = ({
  sizes
}) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
  container: true,
  spacing: 2,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, sizes.map(size => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
  key: size.size,
  item: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx(Size, _extends({}, size, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
})))));

SizePicker.Size = Size;
SizePicker.propTypes = {
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }))
};
SizePicker.defaultProps = {
  sizes: []
};
SizePicker.data = [{
  size: 4
}, {
  size: 4.5,
  checked: true
}, {
  size: 5
}, {
  size: 5.5
}, {
  size: 6
}, {
  size: 6.5
}, {
  size: 7
}, {
  size: 7.5
}, {
  size: 8
}, {
  size: 8.5
}, {
  size: 9
}, {
  size: 9.5
}];
/* harmony default export */ __webpack_exports__["default"] = (SizePicker);

/***/ }),

/***/ "../../node_modules/@erig/common/components/header/AmiHeader.jsx":
/*!*******************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/header/AmiHeader.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AmiMiniHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AmiMiniHeader */ "../../node_modules/@erig/common/components/header/AmiMiniHeader.jsx");
/* harmony import */ var _AmiLargeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AmiLargeHeader */ "../../node_modules/@erig/common/components/header/AmiLargeHeader.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\header\\AmiHeader.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AmiHeader = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default.a, {
  smUp: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_AmiMiniHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
  menus: [{
    label: "NEW RELEASES",
    children: [{
      label: "Shoes",
      children: [{
        label: "Lifestyle"
      }, {
        label: "Running"
      }, {
        label: "Training"
      }, {
        label: "Basketball"
      }, {
        label: "Footer"
      }, {
        label: "Soccer"
      }, {
        label: "Tennis"
      }]
    }, {
      label: "Clothing",
      children: [{
        label: "Shorts"
      }, {
        label: "Polos"
      }, {
        label: "Jacket & Sweatshirts"
      }]
    }, {
      label: "Sale",
      children: [{
        label: "Shoes"
      }, {
        label: "Clothing"
      }]
    }]
  }, {
    label: "MEN",
    icon: "far fa-male"
  }, {
    label: "WOMEN",
    icon: "far fa-female"
  }, {
    label: "KIDS",
    icon: "far fa-child"
  }],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default.a, {
  only: "xs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx(_AmiLargeHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
})));

AmiHeader.propTypes = {};
AmiHeader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (AmiHeader);

/***/ }),

/***/ "../../node_modules/@erig/common/components/header/AmiLargeHeader.jsx":
/*!************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/header/AmiLargeHeader.jsx ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "@material-ui/core/useScrollTrigger");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _extensions_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../extensions/Button */ "../../node_modules/@erig/common/extensions/Button.jsx");
/* harmony import */ var _extensions_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MegaMenu */ "../../node_modules/@erig/common/components/MegaMenu.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\header\\AmiLargeHeader.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





 // import PropTypes from 'prop-types';






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(({
  transitions
}) => ({
  searchInput: ({
    searchAppeared
  }) => ({
    width: searchAppeared ? 180 : 0,
    opacity: searchAppeared ? 1 : 0,
    transition: transitions.create(),
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    marginTop: 8,
    marginLeft: 8,
    padding: "0 8px",
    display: "inline-block",
    color: "#ffffff"
  }),
  secondAppBar: ({
    trigger
  }) => ({
    zIndex: 1099,
    transition: transitions.create("top", {
      duration: transitions.duration.leavingScreen,
      easing: transitions.easing.easeOut
    }),
    top: trigger ? 0 : 64
  }),
  appBarBg: {
    zIndex: 1098
  }
}));

const AmiLargeHeader = () => {
  const trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default()();
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  const {
    0: searchAppeared,
    1: setSearchAppeared
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false);
  const classes = useStyles({
    searchAppeared,
    trigger
  });

  const handleSearchClick = () => {
    setSearchAppeared(!searchAppeared);

    if (!searchAppeared && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3___default.a, {
    appear: false,
    direction: "down",
    in: !trigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    wrap: "nowrap",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: "fas fa-search",
    shape: "circular",
    inverted: true,
    onClick: handleSearchClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2___default.a, {
    inputRef: inputRef,
    className: classes.searchInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: true,
    container: true,
    alignItems: "center",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5",
    weight: "900",
    spacing: "big",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "AMIGO")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    alignItems: "center",
    justify: "flex-end",
    spacing: 2,
    wrap: "nowrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: "far fa-user",
    shape: "circular",
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: "far fa-heart",
    shape: "circular",
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: "far fa-shopping-cart",
    shape: "circular",
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  })))))))), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    position: "sticky",
    elevation: 0,
    className: classes.appBarBg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    elevevation: 2,
    position: "sticky",
    className: classes.secondAppBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_MegaMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    menus: [{
      href: "/",
      label: "PRODUCTS"
    }, {
      href: "/about",
      label: "ABOUT US"
    }],
    subMenus: [{
      label: "SHOES",
      children: ["Lifestyle", "Running", "Training", "Basketball", "Footer", "Soccer", "Tennis"]
    }, {
      label: "CLOTHING",
      children: ["Shorts", "Polos", "Jacket & Sweatshirts"]
    }, {
      label: "SALE",
      children: ["Shoes", "Clothing"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }))));
};

AmiLargeHeader.propTypes = {};
AmiLargeHeader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (AmiLargeHeader);

/***/ }),

/***/ "../../node_modules/@erig/common/components/header/AmiMiniHeader.jsx":
/*!***********************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/header/AmiMiniHeader.jsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "@material-ui/core/useScrollTrigger");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _extensions_Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../extensions/Icon */ "../../node_modules/@erig/common/extensions/Icon.jsx");
/* harmony import */ var _extensions_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../extensions/Button */ "../../node_modules/@erig/common/extensions/Button.jsx");
/* harmony import */ var _extensions_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\components\\header\\AmiMiniHeader.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




















const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(({
  transitions,
  palette,
  spacing
}) => ({
  appBarBg: {
    zIndex: 1098
  },
  searchBox: ({
    trigger
  }) => ({
    transition: transitions.create("top", {
      easing: transitions.easing.sharp
    }),
    top: trigger ? 0 : 56,
    zIndex: 1099
  }),
  searchInput: {
    color: palette.common.white,
    margin: spacing(1),
    padding: spacing(1),
    backgroundColor: "rgba(255, 255, 255, 0.08)"
  },
  listItemText: {
    letterSpacing: "1px",
    fontWeight: 500
  },
  subList: {
    backgroundColor: "#f8f8f8"
  }
}));

const AmiMiniHeader = ({
  menus
}) => {
  const trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()();
  const classes = useStyles({
    trigger
  });
  const {
    0: opened,
    1: setOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: collapsedIndex,
    1: setCollapsedIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([null, null, null]);

  const updateByIndex = (val, level) => {
    setCollapsedIndex(collapsedIndex.map((item, i) => i === level ? val : item));
  }; // eslint-disable-next-line react/prop-types


  const renderItem = (level = 0) => ({
    icon,
    label,
    children
  }, index) => {
    const collapsed = collapsedIndex[level];

    const listItemText = __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16___default.a, {
      key: label,
      style: {
        paddingLeft: (level - 1) * 20 + (level === 0 ? 0 : 28),
        marginLeft: level === 0 && !icon ? 28 : 0
      },
      classes: {
        primary: classes.listItemText
      },
      primary: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    });

    if (!children) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        button: true,
        key: label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: undefined
      }, icon && __jsx(_extensions_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
        size: "small",
        push: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: undefined
      }, icon), listItemText), level === 0 && __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
        light: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: undefined
      }));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
      button: true,
      onClick: () => updateByIndex(collapsed === index ? null : index, level),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }, icon && __jsx(_extensions_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
      size: "small",
      push: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    }, icon), listItemText, collapsedIndex[level] === index ? __jsx(_extensions_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, "expand_less") : __jsx(_extensions_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, "expand_more")), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8___default.a, {
      in: collapsedIndex[level] === index,
      timeout: "auto",
      unmountOnExit: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: classes.subList,
      component: "div",
      disablePadding: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }, children.map(renderItem(level + 1)))), level === 0 && __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
      light: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11___default.a, {
    appear: false,
    direction: "down",
    in: !trigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    container: true,
    spacing: 1,
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    icon: "far fa-bars",
    shape: "circular",
    inverted: true,
    onClick: () => setOpened(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(_extensions_Typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
    variant: "h5",
    weight: 900,
    spacing: "big",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "AMIGO")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    icon: "far fa-user",
    shape: "circular",
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    icon: "far fa-shopping-cart",
    shape: "circular",
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  })))))), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "sticky",
    elevation: 0,
    className: classes.appBarBg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  })), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.searchBox,
    elevation: 2,
    position: "sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.searchInput,
    placeholder: "Type to search...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  })), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default.a, {
    open: opened,
    onClose: () => setOpened(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
    minWidth: 320,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx(_extensions_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    shape: "circular",
    icon: "close",
    onClick: () => setOpened(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }), menus.map(renderItem(0)))));
};

AmiMiniHeader.propTypes = {
  menus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}))
  }))
};
AmiMiniHeader.defaultProps = {
  menus: []
};
/* harmony default export */ __webpack_exports__["default"] = (AmiMiniHeader);

/***/ }),

/***/ "../../node_modules/@erig/common/components/header/index.jsx":
/*!***************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/components/header/index.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AmiHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AmiHeader */ "../../node_modules/@erig/common/components/header/AmiHeader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AmiHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../../node_modules/@erig/common/extensions/Button.jsx":
/*!*********************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/extensions/Button.jsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icon */ "../../node_modules/@erig/common/extensions/Icon.jsx");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\extensions\\Button.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const getLoaderSize = size => {
  if (size === "small") return 16;
  if (size === "big") return 28;
  if (size === "large") return 36;
  return 20;
};

const injectColor = color => {
  if (color === "inherit" || color === "primary" || color === "secondary" || color === "default") {
    return color;
  }

  return undefined;
};

const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(({
  breakpoints,
  palette,
  spacing,
  shadows
}) => {
  const labelSizes = {
    small: 14,
    normal: 16,
    big: 18,
    large: 22
  };
  const btnHeights = {
    small: 28,
    normal: 36,
    big: 48,
    large: 56
  };
  const elongatedWidth = 160;
  const defaultFontWeight = 500;
  const defaultLetterSpacing = 0;
  const defaultTextTransform = "none";
  const invertedColor = palette.common.white;
  const outlinedBorderWidth = 1;
  const extraStyles = {
    // if you want to extend predefined button
    // add style to below variable is recommended.
    root: {// ex.
      // minHeight: 44,
      // color: palette.text.secondary,
    },
    containedPrimary: {},
    containedSecondary: {},
    outlinedPrimary: {},
    outlinedSecondary: {}
  }; // >>>> To request more features, open issue here <<<<
  // https://github.com/siriwatknp/mui-treasury/issues/new
  // ------------ !READ ONLY -------------- //
  // ---- DO NOT EDIT, MIGHT RUIN YOUR BTN ---- //

  const iconSelector = '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons, > svg';
  const bgIconSelector = // eslint-disable-next-line max-len
  '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons[class*="-bg-"], > svg[class*="-bg-"]';
  const notBgIconSelector = // eslint-disable-next-line max-len
  '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons:not([class*="-bg-"]), > svg:not([class*="-bg-"])';
  const loaderSelector = ".MuiButton-label .MuiButton-loader";

  const mapBtnHeight = x => 36 - Math.exp(3.72 - x / 38.6);

  const getIconSize = btnHeight => {
    const icon = Math.round(mapBtnHeight(btnHeight));

    if (icon % 2 === 0) {
      return icon;
    }

    return icon + 1;
  };

  const getBgIconSize = btnSize => {
    const mapping = {
      small: btnHeights.small - 6,
      normal: btnHeights.normal - 8,
      big: btnHeights.big - 12,
      large: btnHeights.large - 16
    };
    return mapping[btnSize];
  };

  const generateStylesBySize = size => ({
    fontSize: labelSizes[size],
    padding: `0 ${btnHeights[size] / 2}px`,
    minHeight: btnHeights[size],
    minWidth: btnHeights[size],
    // icon
    [`& ${iconSelector}`]: {
      // default icon size
      fontSize: getIconSize(btnHeights[size]),
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center"
    },
    [`& ${bgIconSelector}`]: {
      margin: "0 !important",
      fontSize: getIconSize(btnHeights[size]) - 2,
      width: getBgIconSize(size),
      height: getBgIconSize(size),
      "&:first-of-type": {
        transform: "translateX(-50%)"
      },
      "&:last-of-type": {
        transform: "translateX(50%)"
      }
    }
  }); // ---------------- END OF READ ONLY ------------------- //


  return {
    label: {
      letterSpacing: defaultLetterSpacing,
      textTransform: defaultTextTransform,
      fontWeight: defaultFontWeight
    },
    root: _objectSpread({}, extraStyles.root, {}, generateStylesBySize("normal"), {
      // STANDALONE
      "&.-color-danger": {
        color: palette.error.main,
        "&:hover": {
          backgroundColor: color__WEBPACK_IMPORTED_MODULE_2___default()(palette.error.main).fade(0.92).toString()
        }
      },
      "&.-compact": {
        paddingTop: 3,
        paddingBottom: 3
      },
      "&.-elongated": {
        minWidth: `${elongatedWidth}px!important`
      },
      "&.-inverted": {
        color: invertedColor,
        "&:hover": {
          background: "rgba(255, 255, 255, 0.2)"
        }
      },
      // Icon
      // eslint-disable-next-line max-len
      '&[class*="-shape-rectangle"], &[class*="-shape-chubby"], &:not([class*="-shape-"])': {
        [`& ${notBgIconSelector}`]: {
          "&:first-of-type": {
            marginLeft: "-0.3em",
            marginRight: 8
          },
          "&:last-of-type": {
            marginRight: "-0.3em",
            marginLeft: 8
          }
        }
      },
      "&.-labelExpanded": {
        [`& ${notBgIconSelector}`]: {
          "&:first-of-type": {
            marginLeft: "-0.4em"
          },
          "&:last-of-type": {
            marginRight: "-0.4em"
          }
        },
        "& .MuiButton-span": {
          marginLeft: "auto !important",
          marginRight: "auto !important"
        }
      },
      "&.-mobileFullWidth": {
        [breakpoints.only("xs")]: {
          width: "100%"
        }
      },
      // loading
      "&.-loading": {
        pointerEvents: "none",
        "& .MuiButton-label": {
          color: "rgba(0,0,0,0)",
          "& .MuiButton-loader": {
            color: palette.text.primary
          }
        }
      },
      "& .MuiButton-loader": {
        position: "absolute",
        top: "50%",
        left: "50%"
      },
      // sizes
      "&.-size-small": _objectSpread({}, generateStylesBySize("small")),
      "&.-size-big": _objectSpread({}, generateStylesBySize("big")),
      "&.-size-large": _objectSpread({}, generateStylesBySize("large")),
      "&.-shape-chubby": {
        borderRadius: 100,
        "& .MuiButton-span": {
          "&:first-of-type": {
            marginLeft: "0.4em"
          },
          "&:last-of-type": {
            marginRight: "0.4em"
          }
        }
      },
      "&.-shape-circular, &.-shape-square": {
        borderRadius: "50%",
        padding: 12,
        [`& ${iconSelector}`]: {
          margin: 0,
          fontSize: 20
        }
      },
      "&.-shape-square, &.-shape-rectangle": {
        borderRadius: 0
      },
      // COMBINATION
      "&.-shape-circular.-size-small, &.-shape-square.-size-small": {
        padding: spacing(1.25) // [`& ${iconSelector}`]: {
        //   fontSize: 16,
        // },

      },
      "&.-shape-circular.-size-big, &.-shape-square.-size-big": {
        padding: spacing(1.5) // [`& ${iconSelector}`]: {
        //   fontSize: 28,
        // },

      },
      "&.-shape-circular.-size-large, &.-shape-square.-size-large": {
        padding: spacing(1.75) // [`& ${iconSelector}`]: {
        //   fontSize: 36,
        // },

      },
      "&.-size-big.-compact": {
        minHeight: btnHeights.big - 8
      },
      "&.-size-large.-compact": {
        minHeight: btnHeights.large - 8
      },
      "&$disabled.-inverted": {
        borderColor: "rgba(255, 255, 255, 0.38)",
        color: "rgba(255, 255, 255, 0.38)"
      },
      "&.-loading.-inverted": {
        [`& ${loaderSelector}`]: {
          color: invertedColor
        }
      }
    }),
    text: {
      padding: `0 ${btnHeights.normal / 2}px`
    },
    contained: {
      "&.-color-danger": {
        backgroundColor: palette.error.main,
        color: invertedColor,
        "&:hover": {
          backgroundColor: palette.error.dark,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: palette.error.dark
          }
        },
        "&$disabled": {
          color: palette.action.disabled,
          boxShadow: shadows[0],
          backgroundColor: palette.action.disabledBackground
        }
      },
      // No Shadow
      "&$focusVisible.-shadowless": {
        boxShadow: "none"
      },
      "&.-shadowless": {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none"
        }
      },
      // ---------
      "&.-inverted": {
        transition: "unset",
        backgroundColor: "unset",
        color: invertedColor,
        borderWidth: outlinedBorderWidth,
        borderStyle: "solid",
        borderColor: invertedColor,
        "&:hover": {
          background: invertedColor,
          color: palette.text.primary
        },
        "& .MuiButton-label": {
          fontWeight: "bold"
        }
      }
    },
    containedPrimary: _objectSpread({}, extraStyles.containedPrimary, {
      "&.-inverted": {
        borderColor: palette.primary.main,
        color: palette.primary.main,
        "&:hover": {
          background: palette.primary.main,
          color: palette.common.white
        }
      },
      [`&.-loading ${loaderSelector}`]: {
        color: palette.common.white
      }
    }),
    containedSecondary: _objectSpread({}, extraStyles.containedSecondary, {
      "&.-inverted": {
        borderColor: palette.secondary.main,
        color: palette.secondary.main,
        "&:hover": {
          background: palette.secondary.main,
          color: palette.common.white
        }
      },
      [`&.-loading ${loaderSelector}`]: {
        color: palette.common.white
      }
    }),
    outlined: {
      "&.-color-danger": {
        borderColor: color__WEBPACK_IMPORTED_MODULE_2___default()(palette.error.main).fade(0.5).toString(),
        "&:hover": {
          borderColor: palette.error.main
        }
      },
      "&.-inverted": {
        borderWidth: outlinedBorderWidth,
        transition: "unset",
        borderColor: "rgba(255, 255, 255, 0.54)",
        color: "rgba(255, 255, 255, 0.87)",
        "&:hover": {
          borderColor: invertedColor,
          background: "rgba(255, 255, 255, 0.24)",
          color: invertedColor
        },
        "& .MuiButton-label": {
          fontWeight: "bold"
        }
      }
    },
    outlinedPrimary: _objectSpread({}, extraStyles.outlinedPrimary, {
      borderWidth: outlinedBorderWidth,
      "&:hover": {
        borderWidth: outlinedBorderWidth
      },
      "&.-inverted": {
        "&:hover": {
          color: palette.primary.main,
          borderColor: palette.primary.main,
          backgroundColor: color__WEBPACK_IMPORTED_MODULE_2___default()(palette.primary.main).alpha(0.1).lighten(0.5).string()
        }
      },
      [`&.-loading ${loaderSelector}`]: {
        color: palette.primary.main
      }
    }),
    outlinedSecondary: _objectSpread({}, extraStyles.outlinedSecondary, {
      borderWidth: outlinedBorderWidth,
      "&:hover": {
        borderWidth: outlinedBorderWidth
      },
      "&.-inverted": {
        "&:hover": {
          color: palette.secondary.main,
          borderColor: palette.secondary.main,
          backgroundColor: color__WEBPACK_IMPORTED_MODULE_2___default()(palette.secondary.main).alpha(0.1).lighten(0.5).string()
        }
      },
      [`&.-loading ${loaderSelector}`]: {
        color: palette.secondary.main
      }
    }),
    focusVisible: {},
    disabled: {}
  };
});
const Button = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((_ref, ref) => {
  let {
    className,
    color,
    inverted,
    loading,
    elongated,
    size,
    shape,
    compact,
    shadowless,
    labelExpanded,
    mobileFullWidth,
    icon,
    iconIsolated,
    iconProps,
    iconPosition,
    children,
    loaderProps
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "color", "inverted", "loading", "elongated", "size", "shape", "compact", "shadowless", "labelExpanded", "mobileFullWidth", "icon", "iconIsolated", "iconProps", "iconPosition", "children", "loaderProps"]);

  const iconComponent = typeof icon === "string" ? __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, iconProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: undefined
  }), icon) : icon;
  const loaderSize = getLoaderSize(size);

  const renderChildren = () => icon ? __jsx("span", {
    className: "MuiButton-span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: undefined
  }, children) : children;

  const _useStyles = useStyles(),
        {
    root,
    label
  } = _useStyles,
        classes = _objectWithoutProperties(_useStyles, ["root", "label"]);

  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    ref: ref,
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(className, inverted && "-inverted", loading && "-loading", elongated && "-elongated", color && `-color-${color}`, size && `-size-${size}`, shape && `-shape-${shape}`, labelExpanded && "-labelExpanded", mobileFullWidth && "-mobileFullWidth", shadowless && "-shadowless", compact && "-compact"),
    color: injectColor(color)
  }, props, {
    classes: _objectSpread({
      root: clsx__WEBPACK_IMPORTED_MODULE_3___default()("MuiButton-root", root),
      label: clsx__WEBPACK_IMPORTED_MODULE_3___default()("MuiButton-label", iconIsolated && "-icon-isolated", label)
    }, classes),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: undefined
  }), loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7___default.a, _extends({
    thickness: 6
  }, loaderProps, {
    size: loaderSize,
    style: {
      marginLeft: -loaderSize / 2,
      marginTop: -loaderSize / 2
    },
    className: "MuiButton-loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: undefined
  })), icon && iconPosition === "start" && iconComponent, shape !== "circular" && renderChildren(), icon && iconPosition === "end" && iconComponent);
});
Button.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}),
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["default", "inherit", "primary", "secondary", // custom
  "danger"]),
  compact: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  elongated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  labelExpanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  mobileFullWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  shadowless: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["small", "", "big", "large"]),
  shape: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["", "chubby", "circular", "square", "rectangle"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  iconIsolated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["start", "end"]),
  iconProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}),
  loaderProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})
};
Button.defaultProps = {
  className: "",
  classes: {},
  children: null,
  color: "default",
  compact: false,
  inverted: false,
  loading: false,
  elongated: false,
  labelExpanded: false,
  mobileFullWidth: false,
  shadowless: false,
  size: "",
  shape: "",
  icon: "",
  iconIsolated: false,
  iconPosition: "start",
  iconProps: {},
  loaderProps: {}
};

Button.getTheme = () => {};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/@erig/common/extensions/Icon.jsx":
/*!*******************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/extensions/Icon.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\extensions\\Icon.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const injectColor = color => {
  if (color === "inherit" || color === "primary" || color === "secondary" || color === "action" || color === "error" || color === " disabled") {
    return color;
  }

  return undefined;
};

const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(({
  palette,
  transitions,
  spacing
}) => {
  const invertedColor = palette.common.white;
  return {
    root: {
      // STANDALONE
      verticalAlign: "sub",
      "&.-push-left": {
        marginLeft: spacing(1)
      },
      "&.-push-right": {
        marginRight: spacing(1)
      },
      "&.-link": {
        cursor: "pointer",
        '&:not([class*="-color"])': {
          color: palette.text.primary
        },
        transition: transitions.create(),
        "&:hover": {
          transform: "scale(1.2)"
        }
      },
      // colors
      "&.-color-success": {
        color: "#28a745"
      },
      "&.-color-danger": {
        color: palette.error.main
      },
      "&.-inverted": {
        color: invertedColor
      },
      // icon
      "& .MuiIcon--fa": {
        verticalAlign: "unset",
        padding: 2,
        "&.svg-inline--fa": {
          width: "1em"
        }
      },
      "& i.MuiIcon--fa": {
        display: "block",
        "&:before": {
          display: "block",
          fontSize: 20
        }
      },
      // -------------------------------
      // sizes
      "&.-size-small": {
        fontSize: 20,
        "& i.MuiIcon--fa:before": {
          fontSize: 16
        }
      },
      "&.-size-big": {
        fontSize: 28,
        "& i.MuiIcon--fa:before": {
          fontSize: 24
        }
      },
      "&.-size-large": {
        fontSize: 32,
        "& i.MuiIcon--fa:before": {
          fontSize: 28
        }
      },
      // background
      '&[class*="-bg"]': {
        width: "1.5em",
        height: "1.5em",
        padding: "0.25em"
      },
      "&.-bg-default": {
        backgroundColor: palette.grey[200]
      },
      "&.-bg-primary": {
        backgroundColor: palette.primary.main,
        color: invertedColor
      },
      "&.-bg-secondary": {
        backgroundColor: palette.secondary.main,
        color: invertedColor
      },
      "&.-bg-danger": {
        backgroundColor: palette.error.main,
        color: invertedColor
      },
      "&.-bg-white": {
        backgroundColor: invertedColor
      },
      "&.-bg-lightPrimary": {
        backgroundColor: palette.primary.light
      },
      "&.-bg-lightSecondary": {
        backgroundColor: palette.secondary.light
      },
      // shapes
      "&.-shape-square": {
        borderRadius: 0
      },
      "&.-shape-circular": {
        borderRadius: "50%"
      },
      "&.-shape-round": {
        borderRadius: 4
      },
      // COMBINATION
      "&.-bg-default.-link.-inverted": {
        color: palette.text.primary
      },
      '&.-link.-inverted:not([class*="-color"])': {
        color: invertedColor
      }
    }
  };
});

const Icon = (_ref) => {
  let {
    bgColor,
    className,
    children,
    color,
    fontAwesomeProps,
    icon,
    inverted,
    link,
    push,
    size,
    shape
  } = _ref,
      props = _objectWithoutProperties(_ref, ["bgColor", "className", "children", "color", "fontAwesomeProps", "icon", "inverted", "link", "push", "size", "shape"]);

  const mainIcon = children || icon;
  const classes = useStyles();
  return __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    component: link ? "a" : "span"
  }, props, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("MuiIcon-root", className, classes.root, bgColor && `-bg-${bgColor}`, color && `-color-${color}`, inverted && "-inverted", link && "-link", push && `-push-${push}`, shape && `-shape-${shape}`, size && `-size-${size}`),
    color: injectColor(color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }), mainIcon.includes("fa-") ? __jsx("i", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("MuiIcon--fa", mainIcon)
  }, fontAwesomeProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  })) : mainIcon);
};

Icon.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  fontAwesomeProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({}),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  inverted: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["small", "", "big", "large"]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["", "inherit", "primary", "secondary", "action", "error", "disabled", // custom
  "danger", "success"]),
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["", "default", "primary", "secondary", // custom
  "danger", "white"]),
  shape: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["", "square", "circular", "round"]),
  push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["", "left", "right"])
};
Icon.defaultProps = {
  bgColor: "",
  className: "",
  children: null,
  color: "",
  fontAwesomeProps: {},
  icon: "",
  inverted: false,
  link: false,
  push: "",
  size: "",
  shape: ""
};

Icon.getTheme = () => {};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "../../node_modules/@erig/common/extensions/Typography.jsx":
/*!*************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/@erig/common/extensions/Typography.jsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\node_modules\\@erig\\common\\extensions\\Typography.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const injectColor = color => {
  if (color === "default" || color === "inherit" || color === "primary" || color === "secondary" || color === "textPrimary" || color === "textSecondary" || color === "error") {
    return color;
  }

  return undefined;
};

const injectDisplay = display => {
  if (display === "initial" || display === "inline" || display === "block") {
    return display;
  }

  return undefined;
};

const generateMediaQueries = (css, breakpoints, object) => {
  if (!breakpoints) return "";
  const keys = Object.keys(object);
  const result = {};
  keys.forEach(key => {
    if (key === "xs") {
      result[css] = object[key];
    } else {
      result[breakpoints.up(key)] = {
        [css]: object[key]
      };
    }
  });
  return result;
};

const createStylesBySize = (css, cls, values, breakpoints) => values.reduce((result, val) => _objectSpread({}, result, {
  [`${cls}${val[0]}`]: typeof val[1] === "object" ? generateMediaQueries(css, breakpoints, val[1]) : {
    [css]: val[1]
  }
}), {}); // call Typography.setSecondFamily("your font family") in App.js
// before using


let secondFamilyVar = "";
const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(({
  palette,
  spacing,
  breakpoints
}) => {
  const invertedColor = palette.common.white;
  const codeStyle = {
    // change code style here!
    // default style is similar to antd
    // https://ant.design/components/typography/#components-typography-demo-text
    margin: "0 .2em",
    padding: ".2em .4em .1em",
    fontSize: "75%",
    background: "rgba(218,218,218,0.38)",
    border: `1px solid ${palette.grey[300]}`,
    borderRadius: 3,
    fontFamily: // eslint-disable-next-line max-len
    "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,Courier,monospace"
  };
  const blockQuoteStyle = {
    // change code style here!
    // default style is similar to reactjs.org
    // https://reactjs.org/docs/
    backgroundColor: "rgba(255,229,100,0.3)",
    borderLeftColor: "#ffe564",
    borderLeftWidth: 9,
    borderLeftStyle: "solid",
    padding: spacing(2.5, 5, 2.5, 3),
    margin: spacing(2.5, -3, 3)
  };
  return {
    root: _objectSpread({
      "&.-code, & code": codeStyle,
      "&.-blockquote, & blockquote": blockQuoteStyle,
      "& ul, ol": {
        paddingLeft: spacing(3)
      },
      "& li": {
        marginBottom: "0.5em"
      },
      "& b": {
        fontWeight: "bold"
      },
      "&.-inverted:not(.-code)": {
        color: invertedColor
      },
      // family
      // call Typography.setSecondFamily("your font family") in App.js
      // before using
      "&.-second-family": {
        fontFamily: secondFamilyVar
      }
    }, createStylesBySize("color", "&.-color-", [["hint", palette.grey[500]], ["danger", palette.error.main]]), {}, createStylesBySize("display", "&.-display-", [["inline-block", "inline-block"], ["inline-flex", "inline-flex"]]), {}, createStylesBySize("fontSize", "&.-size-", [["small", 12], ["big", 20], ["large", 24]]), {}, createStylesBySize("textIndent", "&.-indent-", [["small", spacing(2)], ["medium", spacing(3)], ["big", spacing(4)]]), {}, createStylesBySize("letterSpacing", "&.-spacing-", [["small", "0.5px"], ["medium", "1px"], ["big", "2px"]]), {}, createStylesBySize("fontWeight", "&.-weight-", [["100", 100], ["200", 200], ["300", 300], ["400", 400], ["500", 500], ["600", 600], ["700", 700], ["800", 800], ["900", 900], ["normal", "normal"], ["bold", "bold"]]), {}, createStylesBySize("marginTop", "&.-mt-", [["none", "0px !important"], ["small", {
      xs: spacing(1),
      md: spacing(1.5)
    }], ["medium", {
      xs: spacing(2),
      md: spacing(3)
    }], ["big", {
      xs: spacing(4),
      md: spacing(5)
    }]], breakpoints), {}, createStylesBySize("marginBottom", "&.-mb-", [["none", "0px !important"], ["small", {
      xs: spacing(1),
      md: spacing(1.5)
    }], ["medium", {
      xs: spacing(2),
      md: spacing(3)
    }], ["big", {
      xs: spacing(4),
      md: spacing(5)
    }]], breakpoints), {
      // push
      "&.-push-right": {
        marginRight: spacing(1.5),
        [breakpoints.up("md")]: {
          marginRight: spacing(2.5)
        }
      },
      "&.-push-left": {
        marginLeft: spacing(1.5),
        [breakpoints.up("md")]: {
          marginLeft: spacing(2.5)
        }
      },
      "&.-anchor": {
        "&:hover": {
          "& .-anchor-link": {
            visibility: "visible"
          }
        },
        "& .-anchor-link": {
          margin: spacing(0, 1),
          visibility: "hidden",
          color: palette.grey[600],
          "& > *": {
            verticalAlign: "middle"
          },
          "&:hover": {
            color: palette.grey[900]
          }
        }
      }
    }),
    button: {
      verticalAlign: "unset"
    }
  };
});

const Typography = (_ref) => {
  let {
    anchor,
    hrefAnchor,
    component,
    children,
    className,
    blockquote,
    display,
    bottomSpace,
    topSpace,
    push,
    indent,
    code,
    color,
    link,
    weight,
    size,
    inverted,
    secondFamily,
    spacing
  } = _ref,
      props = _objectWithoutProperties(_ref, ["anchor", "hrefAnchor", "component", "children", "className", "blockquote", "display", "bottomSpace", "topSpace", "push", "indent", "code", "color", "link", "weight", "size", "inverted", "secondFamily", "spacing"]);

  const classes = useStyles();

  const similarProps = _objectSpread({}, props, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("MuiTypography-root", className, anchor && `-anchor`, display && `-display-${display}`, size && `-size-${size}`, indent && `-indent-${indent}`, inverted && "-inverted", code && "-code", blockquote && "-blockquote", color && `-color-${color}`, weight && `-weight-${weight}`, spacing && `-spacing-${spacing}`, bottomSpace && `-mb-${bottomSpace}`, topSpace && `-mt-${topSpace}`, push && `-push-${push}`, secondFamily && "-second-family"),
    display: injectDisplay(display),
    color: injectColor(color),
    component: code ? "span" : component,
    classes
  });

  if (link) {
    return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, similarProps, {
      color: injectColor(color || "secondary"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: undefined
    }), children, anchor && __jsx("a", {
      href: hrefAnchor,
      className: "-anchor-link",
      "aria-label": "Anchor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: undefined
    }, anchor));
  }

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({}, similarProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }), children, anchor && __jsx("a", {
    href: hrefAnchor,
    className: "-anchor-link",
    "aria-label": "Anchor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }, anchor));
};

Typography.propTypes = {
  anchor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  hrefAnchor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  blockquote: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  display: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["initial", "block", "inline", "inline-block", "inline-flex"]),
  inverted: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  code: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  indent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["", "small", "medium", "big"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["small", "", "big", "large"]),
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["", "small", "medium", "big"]),
  bottomSpace: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["", "none", "small", "medium", "big"]),
  topSpace: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["", "none", "small", "medium", "big"]),
  push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["", "left", "right"]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["error", "inherit", "primary", "secondary", "textPrimary", "textSecondary", // custom
  "danger", "hint"]),
  weight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType,
  secondFamily: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
Typography.defaultProps = {
  anchor: null,
  hrefAnchor: "",
  className: "",
  children: null,
  blockquote: false,
  display: undefined,
  color: undefined,
  bottomSpace: "",
  topSpace: "",
  push: "",
  inverted: false,
  code: false,
  indent: "",
  size: "",
  spacing: "",
  weight: undefined,
  link: false,
  component: undefined,
  secondFamily: false
};

Typography.getTheme = () => {};

Typography.setSecondFamily = family => {
  secondFamilyVar = family;
};

/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!***********************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/client/link.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!*************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/client/router.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!******************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/client/with-router.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "../../node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!***********************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/link.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../../node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/holly/Documents/hello-render/node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _erig_common_components_BrandPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @erig/common/components/BrandPicker */ "../../node_modules/@erig/common/components/BrandPicker.jsx");
/* harmony import */ var _erig_common_components_CategoryPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @erig/common/components/CategoryPicker */ "../../node_modules/@erig/common/components/CategoryPicker.jsx");
/* harmony import */ var _erig_common_components_ColorPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @erig/common/components/ColorPicker */ "../../node_modules/@erig/common/components/ColorPicker.jsx");
/* harmony import */ var _erig_common_components_Expander__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @erig/common/components/Expander */ "../../node_modules/@erig/common/components/Expander.jsx");
/* harmony import */ var _erig_common_components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @erig/common/components/Layout */ "../../node_modules/@erig/common/components/Layout.jsx");
/* harmony import */ var _erig_common_components_MobileSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @erig/common/components/MobileSelector */ "../../node_modules/@erig/common/components/MobileSelector.jsx");
/* harmony import */ var _erig_common_components_Pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @erig/common/components/Pagination */ "../../node_modules/@erig/common/components/Pagination.jsx");
/* harmony import */ var _erig_common_components_PricePicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @erig/common/components/PricePicker */ "../../node_modules/@erig/common/components/PricePicker.jsx");
/* harmony import */ var _erig_common_components_ProductAds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @erig/common/components/ProductAds */ "../../node_modules/@erig/common/components/ProductAds.jsx");
/* harmony import */ var _erig_common_components_ProductCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @erig/common/components/ProductCard */ "../../node_modules/@erig/common/components/ProductCard.jsx");
/* harmony import */ var _erig_common_components_SizePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @erig/common/components/SizePicker */ "../../node_modules/@erig/common/components/SizePicker.jsx");
/* harmony import */ var _erig_common_extensions_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @erig/common/extensions/Typography */ "../../node_modules/@erig/common/extensions/Typography.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../styles.global */ "./src/styles.global.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../theme */ "./src/theme/index.jsx");
var _jsxFileName = "C:\\Users\\holly\\Documents\\hello-render\\packages\\site-b\\src\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }























const Index = () => __jsx(_erig_common_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
  globalStyles: _styles_global__WEBPACK_IMPORTED_MODULE_19__["default"],
  theme: _theme__WEBPACK_IMPORTED_MODULE_20__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
  bgcolor: "#C2C5CC",
  height: {
    xs: 144,
    md: 200
  },
  textAlign: "center",
  pt: {
    xs: 3,
    md: 5
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(_erig_common_extensions_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
  secondFamily: true,
  weight: "bold",
  size: "big",
  bottomSpace: "small",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "MEN\u2019S LIFESTYLE SHOE"), __jsx(_erig_common_extensions_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "TOTAL 319 ITEMS")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
  mt: {
    xs: -5,
    md: -8
  },
  mb: -5.5,
  position: "relative",
  zIndex: 1,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
  fixed: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
  mx: {
    xs: -2,
    sm: 0
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
  style: {
    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.12)"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
  container: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
  item: true,
  xs: 12,
  sm: 6,
  md: 5,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, __jsx(_erig_common_components_ProductAds__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({}, _erig_common_components_ProductAds__WEBPACK_IMPORTED_MODULE_14__["default"].test1, {
  contentSide: "left",
  contentBoxProps: {
    maxWidth: 200
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
  item: true,
  xs: 12,
  sm: 6,
  md: 7,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx(_erig_common_components_ProductAds__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({}, _erig_common_components_ProductAds__WEBPACK_IMPORTED_MODULE_14__["default"].test2, {
  contentSide: "right",
  contentBoxProps: {
    maxWidth: 300
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
})))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
  only: "xs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
  pt: 2,
  pb: 3,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
})), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
  smUp: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx(_erig_common_components_MobileSelector__WEBPACK_IMPORTED_MODULE_11__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
})), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
  light: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
  container: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
  only: "xs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
  item: true,
  xs: 12,
  sm: 4,
  md: 3,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx(_erig_common_components_Expander__WEBPACK_IMPORTED_MODULE_9__["default"], {
  label: "CATEGORY",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx(_erig_common_components_CategoryPicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
  categories: _erig_common_components_CategoryPicker__WEBPACK_IMPORTED_MODULE_7__["default"].data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
})), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
  light: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}), __jsx(_erig_common_components_Expander__WEBPACK_IMPORTED_MODULE_9__["default"], {
  label: "PRICE",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, __jsx(_erig_common_components_PricePicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
  min: 10,
  max: 400,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
})), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
  light: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}), __jsx(_erig_common_components_Expander__WEBPACK_IMPORTED_MODULE_9__["default"], {
  label: "BRAND",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, __jsx(_erig_common_components_BrandPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
  brands: _erig_common_components_BrandPicker__WEBPACK_IMPORTED_MODULE_6__["default"].data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
})), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
  light: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}), __jsx(_erig_common_components_Expander__WEBPACK_IMPORTED_MODULE_9__["default"], {
  label: "COLOR",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
  p: 1,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, __jsx(_erig_common_components_ColorPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
  colors: _erig_common_components_ColorPicker__WEBPACK_IMPORTED_MODULE_8__["default"].data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
  light: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}), __jsx(_erig_common_components_Expander__WEBPACK_IMPORTED_MODULE_9__["default"], {
  label: "SIZE",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
  p: 1,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, __jsx(_erig_common_components_SizePicker__WEBPACK_IMPORTED_MODULE_16__["default"], {
  sizes: _erig_common_components_SizePicker__WEBPACK_IMPORTED_MODULE_16__["default"].data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
  light: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
  item: true,
  xs: 12,
  sm: 8,
  md: 9,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
  container: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, _erig_common_components_ProductCard__WEBPACK_IMPORTED_MODULE_15__["default"].data.map(data => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
  key: data.name,
  item: true,
  xs: 6,
  sm: 6,
  md: 4,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, __jsx(_erig_common_components_ProductCard__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, data, {
  bordered: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}))))), __jsx(_erig_common_components_Pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
  rootBoxProps: {
    mt: "-1px",
    ml: "-1px",
    borderLeft: "1px solid #f0f0f0"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}))))))));

Index.propTypes = {};
Index.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/styles.global.js":
/*!******************************!*\
  !*** ./src/styles.global.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// styles/global.js
const _defaultExport = new String("body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\", \"Droid Sans\",\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\",monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaG9sbHlcXERvY3VtZW50c1xcaGVsbG8tcmVuZGVyXFxwYWNrYWdlc1xcc2l0ZS1iXFxzcmNcXHN0eWxlcy5nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3lCLEFBR2MsQUFTc0UsU0FSckUsVUFFa0MsdURBTzlDLDhGQU5xQyxtQ0FDRCxrQ0FDcEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxob2xseVxcRG9jdW1lbnRzXFxoZWxsby1yZW5kZXJcXHBhY2thZ2VzXFxzaXRlLWJcXHNyY1xcc3R5bGVzLmdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlcy9nbG9iYWwuanNcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNzcy5nbG9iYWxgXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIixcbiAgICAgIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgfVxuYDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\holly\\\\Documents\\\\hello-render\\\\packages\\\\site-b\\\\src\\\\styles.global.js */");

_defaultExport.__hash = "4022544970";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./src/theme/components sync recursive .js$":
/*!****************************************!*\
  !*** ./src/theme/components sync .js$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/theme/components sync recursive .js$";

/***/ }),

/***/ "./src/theme/index.jsx":
/*!*****************************!*\
  !*** ./src/theme/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */

const theme = {
  typography: {
    useNextVariants: true,
    fontFamily: "'Poppins', sans-serif"
  },
  palette: {
    primary: {
      main: "#c14938"
    }
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiTypography: {
      variant: "body1"
    }
  }
};
let mergedTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])(theme);
mergedTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(mergedTheme);

const req = __webpack_require__("./src/theme/components sync recursive .js$");

let overrides = {};
req.keys().forEach(filename => {
  overrides = _objectSpread({}, overrides, {}, req(filename).default(mergedTheme));
});
mergedTheme.overrides = overrides;
/* harmony default export */ __webpack_exports__["default"] = (mergedTheme);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\holly\Documents\hello-render\packages\site-b\src\pages\index.jsx */"./src/pages/index.jsx");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useScrollTrigger":
/*!*****************************************************!*\
  !*** external "@material-ui/core/useScrollTrigger" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowDown":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowDown" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowUp":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowUp" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowUp");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map