(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/vant-weapp/dist/calendar/utils.js":
/*!**********************************************************!*\
  !*** ./src/components/vant-weapp/dist/calendar/utils.js ***!
  \**********************************************************/
/*! exports provided: ROW_HEIGHT, formatMonthTitle, compareMonth, compareDay, getDayByOffset, getPrevDay, getNextDay, calcDateNum, copyDates, getMonthEndDay, getMonths */
/*! exports used: ROW_HEIGHT, calcDateNum, compareDay, compareMonth, copyDates, formatMonthTitle, getDayByOffset, getMonthEndDay, getMonths, getNextDay, getPrevDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROW_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return formatMonthTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return compareMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return compareDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getDayByOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getPrevDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getNextDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return calcDateNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return copyDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getMonthEndDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getMonths; });
var ROW_HEIGHT = 64;
function formatMonthTitle(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  return "".concat(date.getFullYear(), "\u5E74").concat(date.getMonth() + 1, "\u6708");
}
function compareMonth(date1, date2) {
  if (!(date1 instanceof Date)) {
    date1 = new Date(date1);
  }

  if (!(date2 instanceof Date)) {
    date2 = new Date(date2);
  }

  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();
  var month1 = date1.getMonth();
  var month2 = date2.getMonth();

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}
function compareDay(day1, day2) {
  if (!(day1 instanceof Date)) {
    day1 = new Date(day1);
  }

  if (!(day2 instanceof Date)) {
    day2 = new Date(day2);
  }

  var compareMonthResult = compareMonth(day1, day2);

  if (compareMonthResult === 0) {
    var date1 = day1.getDate();
    var date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }

  return compareMonthResult;
}
function getDayByOffset(date, offset) {
  date = new Date(date);
  date.setDate(date.getDate() + offset);
  return date;
}
function getPrevDay(date) {
  return getDayByOffset(date, -1);
}
function getNextDay(date) {
  return getDayByOffset(date, 1);
}
function calcDateNum(date) {
  var day1 = new Date(date[0]).getTime();
  var day2 = new Date(date[1]).getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}
function copyDates(dates) {
  if (Array.isArray(dates)) {
    return dates.map(function (date) {
      if (date === null) {
        return date;
      }

      return new Date(date);
    });
  }

  return new Date(dates);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
function getMonths(minDate, maxDate) {
  var months = [];
  var cursor = new Date(minDate);
  cursor.setDate(1);

  do {
    months.push(cursor.getTime());
    cursor.setMonth(cursor.getMonth() + 1);
  } while (compareMonth(cursor, maxDate) !== 1);

  return months;
}

/***/ }),

/***/ "./src/components/vant-weapp/dist/common/component.js":
/*!************************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/component.js ***!
  \************************************************************/
/*! exports provided: VantComponent */
/*! exports used: VantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VantComponent; });
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _mixins_basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/basic */ "./src/components/vant-weapp/dist/mixins/basic.js");


var relationFunctions = {
  ancestor: {
    linked: function linked(parent) {
      this.parent = parent;
    },
    unlinked: function unlinked() {
      this.parent = null;
    }
  },
  descendant: {
    linked: function linked(child) {
      this.children = this.children || [];
      this.children.push(child);
    },
    unlinked: function unlinked(child) {
      this.children = (this.children || []).filter(function (it) {
        return it !== child;
      });
    }
  }
};

function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function makeRelation(options, vantOptions, relation) {
  var type = relation.type,
      name = relation.name,
      _linked = relation.linked,
      _unlinked = relation.unlinked,
      _linkChanged = relation.linkChanged;
  var beforeCreate = vantOptions.beforeCreate,
      destroyed = vantOptions.destroyed;

  if (type === 'descendant') {
    options.created = function () {
      beforeCreate && beforeCreate.bind(this)();
      this.children = this.children || [];
    };

    options.detached = function () {
      this.children = [];
      destroyed && destroyed.bind(this)();
    };
  }

  options.relations = Object.assign(options.relations || {}, Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, "../".concat(name, "/index"), {
    type: type,
    linked: function linked(node) {
      relationFunctions[type].linked.bind(this)(node);
      _linked && _linked.bind(this)(node);
    },
    linkChanged: function linkChanged(node) {
      _linkChanged && _linkChanged.bind(this)(node);
    },
    unlinked: function unlinked(node) {
      relationFunctions[type].unlinked.bind(this)(node);
      _unlinked && _unlinked.bind(this)(node);
    }
  }));
}

function VantComponent() {
  var vantOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = {};
  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  });
  var relation = vantOptions.relation;

  if (relation) {
    makeRelation(options, vantOptions, relation);
  } // add default externalClasses


  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class'); // add default behaviors

  options.behaviors = options.behaviors || [];
  options.behaviors.push(_mixins_basic__WEBPACK_IMPORTED_MODULE_1__[/* basic */ "a"]); // map field to form-field behavior

  if (vantOptions.field) {
    options.behaviors.push('wx://form-field');
  }

  if (options.properties) {
    Object.keys(options.properties).forEach(function (name) {
      if (Array.isArray(options.properties[name])) {
        // miniprogram do not allow multi type
        options.properties[name] = null;
      }
    });
  } // add default options


  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };
  Component(options);
}



/***/ }),

/***/ "./src/components/vant-weapp/dist/common/utils.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/utils.js ***!
  \********************************************************/
/*! exports provided: isDef, isObj, isNumber, range, nextTick, getSystemInfoSync, addUnit */
/*! exports used: getSystemInfoSync, isObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isObj; });
/* unused harmony export isNumber */
/* unused harmony export range */
/* unused harmony export nextTick */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSystemInfoSync; });
/* unused harmony export addUnit */
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/typeof.js");

function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x);

  return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function nextTick(fn) {
  setTimeout(function () {
    fn();
  }, 1000 / 30);
}
var systemInfo = null;
function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }

  return systemInfo;
}
function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumber(value) ? "".concat(value, "px") : value;
}

/***/ }),

/***/ "./src/components/vant-weapp/dist/mixins/basic.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/dist/mixins/basic.js ***!
  \********************************************************/
/*! exports provided: basic */
/*! exports used: basic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basic; });
var basic = Behavior({
  methods: {
    $emit: function $emit() {
      this.triggerEvent.apply(this, arguments);
    },
    set: function set(data, callback) {
      this.setData(data, callback);
      return new Promise(function (resolve) {
        return wx.nextTick(resolve);
      });
    },
    getRect: function getRect(selector, all) {
      var _this = this;

      return new Promise(function (resolve) {
        wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/dist/mixins/transition.js":
/*!*************************************************************!*\
  !*** ./src/components/vant-weapp/dist/mixins/transition.js ***!
  \*************************************************************/
/*! exports provided: transition */
/*! exports used: transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transition; });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./src/components/vant-weapp/dist/common/utils.js");


var getClassNames = function getClassNames(name) {
  return {
    enter: "van-".concat(name, "-enter van-").concat(name, "-enter-active enter-class enter-active-class"),
    'enter-to': "van-".concat(name, "-enter-to van-").concat(name, "-enter-active enter-to-class enter-active-class"),
    leave: "van-".concat(name, "-leave van-").concat(name, "-leave-active leave-class leave-active-class"),
    'leave-to': "van-".concat(name, "-leave-to van-").concat(name, "-leave-active leave-to-class leave-active-class")
  };
};

var nextTick = function nextTick() {
  return new Promise(function (resolve) {
    return setTimeout(resolve, 1000 / 30);
  });
};

var transition = function transition(showDefaultValue) {
  return Behavior({
    properties: {
      customStyle: String,
      // @ts-ignore
      show: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow'
      },
      // @ts-ignore
      duration: {
        type: null,
        value: 300,
        observer: 'observeDuration'
      },
      name: {
        type: String,
        value: 'fade'
      }
    },
    data: {
      type: '',
      inited: false,
      display: false
    },
    methods: {
      observeShow: function observeShow(value, old) {
        if (value === old) {
          return;
        }

        value ? this.enter() : this.leave();
      },
      enter: function enter() {
        var _this = this;

        var _this$data = this.data,
            duration = _this$data.duration,
            name = _this$data.name;
        var classNames = getClassNames(name);
        var currentDuration = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "b"])(duration) ? duration.enter : duration;
        this.status = 'enter';
        this.$emit('before-enter');
        Promise.resolve().then(nextTick).then(function () {
          _this.checkStatus('enter');

          _this.$emit('enter');

          _this.setData({
            inited: true,
            display: true,
            classes: classNames.enter,
            currentDuration: currentDuration
          });
        }).then(nextTick).then(function () {
          _this.checkStatus('enter');

          _this.transitionEnded = false;

          _this.setData({
            classes: classNames['enter-to']
          });
        }).catch(function () {});
      },
      leave: function leave() {
        var _this2 = this;

        if (!this.data.display) {
          return;
        }

        var _this$data2 = this.data,
            duration = _this$data2.duration,
            name = _this$data2.name;
        var classNames = getClassNames(name);
        var currentDuration = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "b"])(duration) ? duration.leave : duration;
        this.status = 'leave';
        this.$emit('before-leave');
        Promise.resolve().then(nextTick).then(function () {
          _this2.checkStatus('leave');

          _this2.$emit('leave');

          _this2.setData({
            classes: classNames.leave,
            currentDuration: currentDuration
          });
        }).then(nextTick).then(function () {
          _this2.checkStatus('leave');

          _this2.transitionEnded = false;
          setTimeout(function () {
            return _this2.onTransitionEnd();
          }, currentDuration);

          _this2.setData({
            classes: classNames['leave-to']
          });
        }).catch(function () {});
      },
      checkStatus: function checkStatus(status) {
        if (status !== this.status) {
          throw new Error("incongruent status: ".concat(status));
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        if (this.transitionEnded) {
          return;
        }

        this.transitionEnded = true;
        this.$emit("after-".concat(this.status));
        var _this$data3 = this.data,
            show = _this$data3.show,
            display = _this$data3.display;

        if (!show && display) {
          this.setData({
            display: false
          });
        }
      }
    }
  });
};

/***/ })

}]);
//# sourceMappingURL=common.js.map