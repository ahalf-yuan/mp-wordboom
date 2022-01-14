(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/dist/calendar/index"],{

/***/ "./src/components/vant-weapp/dist/calendar/index.js":
/*!**********************************************************!*\
  !*** ./src/components/vant-weapp/dist/calendar/index.js ***!
  \**********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/dist/common/component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/components/vant-weapp/dist/calendar/utils.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast/toast */ "./src/components/vant-weapp/dist/toast/toast.js");





Object(_common_component__WEBPACK_IMPORTED_MODULE_2__[/* VantComponent */ "a"])({
  props: {
    title: {
      type: String,
      value: '日期选择'
    },
    color: String,
    show: {
      type: Boolean,
      observer: function observer(val) {
        if (val) {
          this.initRect();
          this.scrollIntoView();
        }
      }
    },
    formatter: null,
    confirmText: {
      type: String,
      value: '确定'
    },
    rangePrompt: String,
    defaultDate: {
      type: [Number, Array],
      observer: function observer(val) {
        this.setData({
          currentDate: val
        });
        this.scrollIntoView();
      }
    },
    allowSameDay: Boolean,
    confirmDisabledText: String,
    type: {
      type: String,
      value: 'single',
      observer: 'reset'
    },
    minDate: {
      type: null,
      value: Date.now()
    },
    maxDate: {
      type: null,
      value: new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate()).getTime()
    },
    position: {
      type: String,
      value: 'bottom'
    },
    rowHeight: {
      type: [Number, String],
      value: _utils__WEBPACK_IMPORTED_MODULE_3__[/* ROW_HEIGHT */ "a"]
    },
    round: {
      type: Boolean,
      value: true
    },
    poppable: {
      type: Boolean,
      value: true
    },
    showMark: {
      type: Boolean,
      value: true
    },
    showTitle: {
      type: Boolean,
      value: true
    },
    showConfirm: {
      type: Boolean,
      value: true
    },
    showSubtitle: {
      type: Boolean,
      value: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    maxRange: {
      type: [Number, String],
      value: null
    }
  },
  data: {
    subtitle: '',
    currentDate: null,
    scrollIntoView: ''
  },
  created: function created() {
    this.setData({
      currentDate: this.getInitialDate()
    });
  },
  mounted: function mounted() {
    if (this.data.show || !this.data.poppable) {
      this.initRect();
      this.scrollIntoView();
    }
  },
  methods: {
    reset: function reset() {
      this.setData({
        currentDate: this.getInitialDate()
      });
      this.scrollIntoView();
    },
    initRect: function initRect() {
      var _this = this;

      if (this.contentObserver != null) {
        this.contentObserver.disconnect();
      }

      var contentObserver = this.createIntersectionObserver({
        thresholds: [0, 0.1, 0.9, 1],
        observeAll: true
      });
      this.contentObserver = contentObserver;
      contentObserver.relativeTo('.van-calendar__body');
      contentObserver.observe('.month', function (res) {
        if (res.boundingClientRect.top <= res.relativeRect.top) {
          // @ts-ignore
          _this.setData({
            subtitle: Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* formatMonthTitle */ "f"])(res.dataset.date)
          });
        }
      });
    },
    getInitialDate: function getInitialDate() {
      var _this$data = this.data,
          type = _this$data.type,
          defaultDate = _this$data.defaultDate,
          minDate = _this$data.minDate;

      if (type === 'range') {
        var _ref = defaultDate || [],
            _ref2 = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, 2),
            startDay = _ref2[0],
            endDay = _ref2[1];

        return [startDay || minDate, endDay || Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* getNextDay */ "j"])(new Date(minDate)).getTime()];
      }

      if (type === 'multiple') {
        return defaultDate || [minDate];
      }

      return defaultDate || minDate;
    },
    scrollIntoView: function scrollIntoView() {
      var _this2 = this;

      setTimeout(function () {
        var _this2$data = _this2.data,
            currentDate = _this2$data.currentDate,
            type = _this2$data.type,
            show = _this2$data.show,
            poppable = _this2$data.poppable,
            minDate = _this2$data.minDate,
            maxDate = _this2$data.maxDate;
        var targetDate = type === 'single' ? currentDate : currentDate[0];
        var displayed = show || !poppable;

        if (!targetDate || !displayed) {
          return;
        }

        var months = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* getMonths */ "i"])(minDate, maxDate);
        months.some(function (month, index) {
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* compareMonth */ "d"])(month, targetDate) === 0) {
            _this2.setData({
              scrollIntoView: "month".concat(index)
            });

            return true;
          }

          return false;
        });
      }, 100);
    },
    onOpen: function onOpen() {
      this.$emit('open');
    },
    onOpened: function onOpened() {
      this.$emit('opened');
    },
    onClose: function onClose() {
      this.$emit('close');
    },
    onClosed: function onClosed() {
      this.$emit('closed');
    },
    onClickDay: function onClickDay(event) {
      var date = event.detail.date;
      var _this$data2 = this.data,
          type = _this$data2.type,
          currentDate = _this$data2.currentDate,
          allowSameDay = _this$data2.allowSameDay;

      if (type === 'range') {
        var _currentDate = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(currentDate, 2),
            startDay = _currentDate[0],
            endDay = _currentDate[1];

        if (startDay && !endDay) {
          var compareToStart = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* compareDay */ "c"])(date, startDay);

          if (compareToStart === 1) {
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          } else if (allowSameDay) {
            this.select([date, date]);
          }
        } else {
          this.select([date, null]);
        }
      } else if (type === 'multiple') {
        var selectedIndex;
        var selected = currentDate.some(function (dateItem, index) {
          var equal = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* compareDay */ "c"])(dateItem, date) === 0;

          if (equal) {
            selectedIndex = index;
          }

          return equal;
        });

        if (selected) {
          var cancelDate = currentDate.splice(selectedIndex, 1);
          this.setData({
            currentDate: currentDate
          });
          this.unselect(cancelDate);
        } else {
          this.select([].concat(Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(currentDate), [date]));
        }
      } else {
        this.select(date, true);
      }
    },
    unselect: function unselect(dateArray) {
      var date = dateArray[0];

      if (date) {
        this.$emit('unselect', Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* copyDates */ "e"])(date));
      }
    },
    select: function select(date, complete) {
      if (complete && this.data.type === 'range') {
        var valid = this.checkRange(date);

        if (!valid) {
          // auto selected to max range if showConfirm
          if (this.data.showConfirm) {
            this.emit([date[0], Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* getDayByOffset */ "g"])(date[0], this.data.maxRange - 1)]);
          } else {
            this.emit(date);
          }

          return;
        }
      }

      this.emit(date);

      if (complete && !this.data.showConfirm) {
        this.onConfirm();
      }
    },
    emit: function emit(date) {
      var getTime = function getTime(date) {
        return date instanceof Date ? date.getTime() : date;
      };

      this.setData({
        currentDate: Array.isArray(date) ? date.map(getTime) : getTime(date)
      });
      this.$emit('select', Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* copyDates */ "e"])(date));
    },
    checkRange: function checkRange(date) {
      var _this$data3 = this.data,
          maxRange = _this$data3.maxRange,
          rangePrompt = _this$data3.rangePrompt;

      if (maxRange && Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* calcDateNum */ "b"])(date) > maxRange) {
        Object(_toast_toast__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({
          context: this,
          message: rangePrompt || "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 ".concat(maxRange, " \u5929")
        });
        return false;
      }

      return true;
    },
    onConfirm: function onConfirm() {
      var _this3 = this;

      if (this.data.type === 'range' && !this.checkRange(this.data.currentDate)) {
        return;
      }

      wx.nextTick(function () {
        _this3.$emit('confirm', Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* copyDates */ "e"])(_this3.data.currentDate));
      });
    }
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/dist/toast/toast.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/dist/toast/toast.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./src/components/vant-weapp/dist/common/utils.js");

var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast'
};
var queue = [];
var currentOptions = Object.assign({}, defaultOptions);

function parseOptions(message) {
  return Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "b"])(message) ? message : {
    message: message
  };
}

function getContext() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}

function Toast(toastOptions) {
  var options = Object.assign(Object.assign({}, currentOptions), parseOptions(toastOptions));
  var context = options.context || getContext();
  var toast = context.selectComponent(options.selector);

  if (!toast) {
    console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
    return;
  }

  delete options.context;
  delete options.selector;

  toast.clear = function () {
    toast.setData({
      show: false
    });

    if (options.onClose) {
      options.onClose();
    }
  };

  queue.push(toast);
  toast.setData(options);
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
      queue = queue.filter(function (item) {
        return item !== toast;
      });
    }, options.duration);
  }

  return toast;
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(Object.assign({
      type: type
    }, parseOptions(options)));
  };
};

Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');

Toast.clear = function () {
  queue.forEach(function (toast) {
    toast.clear();
  });
  queue = [];
};

Toast.setDefaultOptions = function (options) {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = Object.assign({}, defaultOptions);
};

/* harmony default export */ __webpack_exports__["a"] = (Toast);

/***/ })

},[["./src/components/vant-weapp/dist/calendar/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map