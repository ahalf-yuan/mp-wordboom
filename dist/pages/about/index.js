(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/about/index"],{

/***/ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectSpread2.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectSpread2.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/regenerator/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.7@@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/pages/about/index.tsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./src/pages/about/index.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/_react@16.14.0@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.15@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/index */ "./src/pages/api/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.scss */ "./src/pages/about/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@16.14.0@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);










var _excluded = ["parts"];






var EXCHANGE = {
  word_pl: "复数",
  word_past: "过去式",
  word_done: "过去分词",
  word_ing: "现在分词",
  word_third: "第三人称单数"
};

var About = /*#__PURE__*/function (_Component) {
  Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(About, _Component);

  var _super = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(About);

  function About() {
    var _this;

    Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, About);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "state", {
      detail: {},
      show: false
    });

    return _this;
  }

  Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(About, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Taro.setNavigationBarTitle({
      //   title: '分类名称' // from params
      // })
      this.fetchTransData();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      console.log("===s=sdsds");
    }
  }, {
    key: "fetchTransData",
    value: function () {
      var _fetchTransData = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var res, _ref, _ref$exchange, exchange, _ref$items, items, _ref$symbols, symbols, word_name, _ref2, meanParts, other, detail;

        return _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api_index__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].fetchWordDetail({
                  w: "go"
                });

              case 2:
                res = _context.sent;

                if (!(!res || !res.data)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _ref = res.data || {}, _ref$exchange = _ref.exchange, exchange = _ref$exchange === void 0 ? {} : _ref$exchange, _ref$items = _ref.items, items = _ref$items === void 0 ? [] : _ref$items, _ref$symbols = _ref.symbols, symbols = _ref$symbols === void 0 ? [] : _ref$symbols, word_name = _ref.word_name;
                _ref2 = symbols[0] || {}, meanParts = _ref2.parts, other = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref2, _excluded);
                detail = {
                  exchange: exchange,
                  items: items,
                  symbols: symbols,
                  word_name: word_name,
                  meanParts: meanParts,
                  phItems: other // 读音, ph_am, ph_en, ph_am_mp3, ph_en_mp3, ph_other

                };
                this.setState({
                  detail: detail
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchTransData() {
        return _fetchTransData.apply(this, arguments);
      }

      return fetchTransData;
    }()
  }, {
    key: "onClickLeft",
    value: function onClickLeft() {// wx.showToast({ title: "点击返回", icon: "none" });
    }
  }, {
    key: "onClickRight",
    value: function onClickRight() {
      wx.showToast({
        title: "点击按钮",
        icon: "none"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          detail = _this$state.detail,
          show = _this$state.show;

      var _ref3 = detail || {},
          _ref3$phItems = _ref3.phItems,
          phItems = _ref3$phItems === void 0 ? {} : _ref3$phItems,
          _ref3$meanParts = _ref3.meanParts,
          meanParts = _ref3$meanParts === void 0 ? [] : _ref3$meanParts,
          _ref3$exchange = _ref3.exchange,
          exchange = _ref3$exchange === void 0 ? {} : _ref3$exchange;

      console.log(detail);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
        className: "page-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("van-nav-bar", {
          title: "\u5206\u7C7B\u6807\u9898",
          leftText: "\u8FD4\u56DE",
          leftArrow: true,
          onClickLeft: this.onClickLeft,
          onClickRight: this.onClickRight
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
          className: "header-wrapper",
          children: "header"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
          className: "content-wrapper",
          children: ["\u5185\u5BB9", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
            className: "card-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "b"], {
              className: "word-name",
              children: detail.word_name
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
              className: "pronounce-box",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
                className: "item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("van-icon", {
                  name: "volume-o",
                  className: "icon-item"
                }), "\u82F1", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "b"], {
                  className: "ph-item",
                  children: ["[", phItems.ph_en, "]"]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
                className: "item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("van-icon", {
                  name: "volume-o",
                  className: "icon-item"
                }), "\u7F8E", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "b"], {
                  className: "ph-item",
                  children: ["[", phItems.ph_am, "]"]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
              className: "mean-box",
              children: meanParts.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "b"], {
                    className: "mean-part",
                    children: item.part
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "b"], {
                    children: item.means.join("；")
                  })]
                });
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("van-divider", {
              contentPosition: "left",
              children: "\u4E0A\u4E0B\u6587"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "b"], {
              children: "ssd"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("van-divider", {
              dashed: true
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
              className: "exchange-box",
              children: Object.entries(exchange).map(function (_ref4) {
                var _ref5 = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref4, 2),
                    key = _ref5[0],
                    value = _ref5[1];

                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "b"], {
                    className: "label",
                    children: EXCHANGE[key]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "b"], {
                    className: "exchange",
                    children: value
                  })]
                });
              })
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
          className: "footer-wrapper",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "c"], {
            children: "\u6807\u8BB0\u4E3A\u5DF2\u638C\u63E1"
          })
        })]
      });
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ }),

/***/ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./src/pages/about/index.scss":
/*!************************************!*\
  !*** ./src/pages/about/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/about/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/about/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.15@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.2.1@babel-loader/lib!./index.tsx */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/pages/about/index.tsx");


var config = {"navigationStyle":"custom","usingComponents":{"van-nav-bar":"../../components/vant-weapp/dist/nav-bar/index","van-icon":"../../components/vant-weapp/dist/icon/index","van-divider":"../../components/vant-weapp/dist/divider/index","van-transition":"../../components/vant-weapp/dist/transition/index","van-button":"../../components/vant-weapp/dist/button/index"}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/about/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/api/detail.ts":
/*!*********************************!*\
  !*** ./src/pages/api/detail.ts ***!
  \*********************************/
/*! exports provided: fetchWordDetail */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordDetail", function() { return fetchWordDetail; });
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/index */ "./src/pages/service/index.ts");
/*
* @Author: Gavin
* @CreateTime: xxxx
* @Describe: 测试模块相关接口
*/
// 引入封装后的请求方法

/**
* 获取单个详情
* @param {w: string} 
* @returns 
*/

var fetchWordDetail = function fetchWordDetail(data) {
  return _service_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/api/trans/iciba', data);
};

/***/ }),

/***/ "./src/pages/api/index.ts":
/*!********************************!*\
  !*** ./src/pages/api/index.ts ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail */ "./src/pages/api/detail.ts");



var Api = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _detail__WEBPACK_IMPORTED_MODULE_1__); // 导出所有接口


/* harmony default export */ __webpack_exports__["a"] = (Api);

/***/ }),

/***/ "./src/pages/service/index.ts":
/*!************************************!*\
  !*** ./src/pages/service/index.ts ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.15@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors */ "./src/pages/service/interceptors.ts");



var _excluded = ["loading", "loadingTitle", "contentType", "openErrTips"];

/**
 * https://developers.weixin.qq.com/community/develop/article/doc/000a6e52170f806158bc3173d5b013
 */


_interceptors__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].forEach(function (interceptorItem) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.addInterceptor(interceptorItem);
}); // 模块，命名空间，基础接口声明，此处不作解释 自行了解，结尾提供文档指引

/**
* 获取版本 retrun 对应环境域名
* develop: '开发版', trial: '体验版', release: '正式版'
* 支持扩展 - 思路 可通过 process.env.NODE_ENV 判断当前打包是 生产模式或工厂模式 进而判断 适合多环境 dev -> beta -> uat -> pro
* @returns 域名
*/
var getVersion = function getVersion() {
  // @ts-ignore
  switch (__wxConfig.envVersion) {
    case 'develop':
      return 'http://localhost:8080';

    case 'trial':
      return 'http://trial.gavinpeng.club';

    case 'release':
      return 'http://release.gavinpeng.club';

    default:
      return 'http://develop.gavinpeng.club';
  }
};

var Request = /*#__PURE__*/function () {
  function Request() {
    Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Request);
  }

  Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Request, [{
    key: "baseOptions",
    value: function baseOptions(options) {
      var url = options.url,
          method = options.method,
          data = options.data; // 过滤 扩展属性

      var loading = data.loading,
          loadingTitle = data.loadingTitle,
          contentType = data.contentType,
          openErrTips = data.openErrTips,
          rest = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data, _excluded);

      if (loading) _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading({
        title: loadingTitle || '加载中...',
        mask: true
      });
      var requestParams = {
        url: getVersion() + url,
        method: method,
        data: rest,
        header: {
          // 支持自定义 contentType
          'content-type': contentType || 'application/json',
          // Token
          'Authorization': _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getStorageSync('token'),
          // @TEST
          "Cookie": "wordhub_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxIiwiZXhwIjoxNjQyNzQ4NDM2fQ.xTQZ1hF-rlmx-VDwy0Bl2DCv3P0WWea39arKXjWea_8" // 此处支持扩展，可通过请求 data 参数中加入 header 对象，在上面过滤 语法糖 ...header 此处就不做过多解释，需要的自行添加了解
          // ...header

        },
        // 请求是否带 loading， 传递到 请求响应拦截器 清除 loading 
        loading: loading,
        openErrTips: openErrTips
      };
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.request(requestParams);
    }
  }, {
    key: "get",
    value: function get(url, data) {
      return this.baseOptions({
        url: url,
        method: 'GET',
        data: data
      });
    }
  }, {
    key: "post",
    value: function post(url, data) {
      return this.baseOptions({
        url: url,
        method: 'POST',
        data: data
      });
    }
  }]);

  return Request;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Request());

/***/ }),

/***/ "./src/pages/service/interceptors.ts":
/*!*******************************************!*\
  !*** ./src/pages/service/interceptors.ts ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.15@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./src/pages/service/status.ts");

 // 笔者这里引入 mobx 是对 未登录，登陆失效 等做处理
// import cartStroe from '../store/user'

var customInterceptor = function customInterceptor(chain) {
  var requestParams = chain.requestParams;
  return chain.proceed(requestParams).then(function (res) {
    // 清除 loading
    if (requestParams.loading) _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.hideLoading();

    switch (res.statusCode) {
      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].SUCCESS:
        var result = res.data;

        if (res.data.code === 200) {
          // 接口调通且无异常赋予success标识
          result.success = true;
        } else {
          // 请求接口错误提示，可通过参数中加入 openErrTips: false 关闭
          if (requestParams.openErrTips && result.msg) _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showToast({
            title: result.msg,
            icon: 'none'
          }); // 登录过期或未登录 需要与后端共同定义

          if (result.code === 210 || result.code === 220) {
            // 跳转登陆 清空用户信息等 处理
            // TODO: handle user
            // cartStroe.setStatus(false)
            // cartStroe.setUser({})
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showToast({
              title: result.code === 210 ? '未登录，请先登陆' : '登录信息失效，请重新登陆',
              icon: 'none'
            });
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
              url: '/pages/login/index'
            });
            return Promise.reject(result);
          }
        }

        return result;

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].CREATED:
        return Promise.reject('请求成功并且服务器创建了新的资源');

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].ACCEPTED:
        return Promise.reject('接受请求但没创建资源');

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].CLIENT_ERROR:
        return Promise.reject('服务器不理解请求的语法');

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].AUTHENTICATE:
        return Promise.reject('请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应');

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].FORBIDDEN:
        return Promise.reject('服务器拒绝请求');

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].NOT_FOUND:
        return Promise.reject('服务器找不到请求的网页');

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].SERVER_ERROR:
        return Promise.reject('(服务器内部错误) 服务器遇到错误，无法完成请求');

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].BAD_GATEWAY:
        return Promise.reject('(错误网关) 服务器作为网关或代理，从上游服务器收到无效响应');

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].SERVICE_UNAVAILABLE:
        return Promise.reject('(服务不可用) 服务器目前无法使用(由于超载或停机维护)。 通常，这只是暂时状态。');

      case _status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].GATEWAY_TIMEOUT:
        return Promise.reject('(网关超时) 服务器作为网关或代理，但是没有及时从上游服务器收到请求');

      default:
        console.log('请开发者检查请求拦截未匹配到错误,返回statusCode :>> ', res.statusCode);
        break;
    }
  });
}; // Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。


var interceptors = [customInterceptor, _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.logInterceptor];
/* harmony default export */ __webpack_exports__["a"] = (interceptors);

/***/ }),

/***/ "./src/pages/service/status.ts":
/*!*************************************!*\
  !*** ./src/pages/service/status.ts ***!
  \*************************************/
/*! exports provided: HTTP_STATUS */
/*! exports used: HTTP_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_STATUS; });
var HTTP_STATUS = {
  // 成功处理了请求，一般情况下都是返回此状态码
  SUCCESS: 200,
  // 请求成功并且服务器创建了新的资源
  CREATED: 201,
  // 接受请求但没创建资源
  ACCEPTED: 202,
  // 服务器不理解请求的语法
  CLIENT_ERROR: 400,
  // 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应
  AUTHENTICATE: 401,
  // 服务器拒绝请求
  FORBIDDEN: 403,
  // 服务器找不到请求的网页
  NOT_FOUND: 404,
  // (服务器内部错误) 服务器遇到错误，无法完成请求
  SERVER_ERROR: 500,
  // (错误网关) 服务器作为网关或代理，从上游服务器收到无效响应
  BAD_GATEWAY: 502,
  // (服务不可用) 服务器目前无法使用(由于超载或停机维护)。 通常，这只是暂时状态。
  SERVICE_UNAVAILABLE: 503,
  // (网关超时) 服务器作为网关或代理，但是没有及时从上游服务器收到请求
  GATEWAY_TIMEOUT: 504
};
/**
* 此处有替补实现方式
* 使用键值对直接通过状态码取值
* const HTTP_STATUS = { 
*  '200': '请求服务器端成功',
*  '201': ''
* }
* if(HTTP_STATUS[res.statusCode])
*  console.log(HTTP_STATUS[res.statusCode])
* else 
*  console.log(`请开发者检查请求拦截未匹配到错误,返回statusCode :>> ${res.statusCode}`)
*/

/***/ })

},[["./src/pages/about/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map