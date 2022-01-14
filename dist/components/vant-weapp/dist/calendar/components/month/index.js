(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/dist/calendar/components/month/index"],{

/***/ "./src/components/vant-weapp/dist/calendar/components/month/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/vant-weapp/dist/calendar/components/month/index.js ***!
  \***************************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/component */ "./src/components/vant-weapp/dist/common/component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/components/vant-weapp/dist/calendar/utils.js");



Object(_common_component__WEBPACK_IMPORTED_MODULE_1__[/* VantComponent */ "a"])({
  props: {
    date: {
      type: null,
      observer: 'setDays'
    },
    type: {
      type: String,
      observer: 'setDays'
    },
    color: String,
    minDate: {
      type: null,
      observer: 'setDays'
    },
    maxDate: {
      type: null,
      observer: 'setDays'
    },
    showMark: Boolean,
    rowHeight: [Number, String],
    formatter: {
      type: null,
      observer: 'setDays'
    },
    currentDate: {
      type: [null, Array],
      observer: 'setDays'
    },
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean
  },
  data: {
    visible: true,
    days: []
  },
  methods: {
    onClick: function onClick(event) {
      var index = event.currentTarget.dataset.index;
      var item = this.data.days[index];

      if (item.type !== 'disabled') {
        this.$emit('click', item);
      }
    },
    setDays: function setDays() {
      var days = [];
      var startDate = new Date(this.data.date);
      var year = startDate.getFullYear();
      var month = startDate.getMonth();
      var totalDay = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getMonthEndDay */ "h"])(startDate.getFullYear(), startDate.getMonth() + 1);

      for (var day = 1; day <= totalDay; day++) {
        var date = new Date(year, month, day);
        var type = this.getDayType(date);
        var config = {
          date: date,
          type: type,
          text: day,
          bottomInfo: this.getBottomInfo(type)
        };

        if (this.data.formatter) {
          config = this.data.formatter(config);
        }

        days.push(config);
      }

      this.setData({
        days: days
      });
    },
    getMultipleDayType: function getMultipleDayType(day) {
      var currentDate = this.data.currentDate;

      if (!Array.isArray(currentDate)) {
        return '';
      }

      var isSelected = function isSelected(date) {
        return currentDate.some(function (item) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* compareDay */ "c"])(item, date) === 0;
        });
      };

      if (isSelected(day)) {
        var prevDay = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getPrevDay */ "k"])(day);
        var nextDay = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getNextDay */ "j"])(day);
        var prevSelected = isSelected(prevDay);
        var nextSelected = isSelected(nextDay);

        if (prevSelected && nextSelected) {
          return 'multiple-middle';
        }

        if (prevSelected) {
          return 'end';
        }

        return nextSelected ? 'start' : 'multiple-selected';
      }

      return '';
    },
    getRangeDayType: function getRangeDayType(day) {
      var _this$data = this.data,
          currentDate = _this$data.currentDate,
          allowSameDay = _this$data.allowSameDay;

      if (!Array.isArray(currentDate)) {
        return;
      }

      var _currentDate = Object(_Users_yuanyazhen_github_projects_mp_wordboom_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(currentDate, 2),
          startDay = _currentDate[0],
          endDay = _currentDate[1];

      if (!startDay) {
        return;
      }

      var compareToStart = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* compareDay */ "c"])(day, startDay);

      if (!endDay) {
        return compareToStart === 0 ? 'start' : '';
      }

      var compareToEnd = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* compareDay */ "c"])(day, endDay);

      if (compareToStart === 0 && compareToEnd === 0 && allowSameDay) {
        return 'start-end';
      }

      if (compareToStart === 0) {
        return 'start';
      }

      if (compareToEnd === 0) {
        return 'end';
      }

      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle';
      }
    },
    getDayType: function getDayType(day) {
      var _this$data2 = this.data,
          type = _this$data2.type,
          minDate = _this$data2.minDate,
          maxDate = _this$data2.maxDate,
          currentDate = _this$data2.currentDate;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* compareDay */ "c"])(day, minDate) < 0 || Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* compareDay */ "c"])(day, maxDate) > 0) {
        return 'disabled';
      }

      if (type === 'single') {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* compareDay */ "c"])(day, currentDate) === 0 ? 'selected' : '';
      }

      if (type === 'multiple') {
        return this.getMultipleDayType(day);
      }
      /* istanbul ignore else */


      if (type === 'range') {
        return this.getRangeDayType(day);
      }
    },
    getBottomInfo: function getBottomInfo(type) {
      if (this.data.type === 'range') {
        if (type === 'start') {
          return '开始';
        }

        if (type === 'end') {
          return '结束';
        }

        if (type === 'start-end') {
          return '开始/结束';
        }
      }
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/dist/calendar/components/month/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map