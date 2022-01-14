(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/dist/nav-bar/index"],{

/***/ "./src/components/vant-weapp/dist/nav-bar/index.js":
/*!*********************************************************!*\
  !*** ./src/components/vant-weapp/dist/nav-bar/index.js ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/dist/common/component.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./src/components/vant-weapp/dist/common/utils.js");


Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  classes: ['title-class'],
  props: {
    title: String,
    fixed: {
      type: Boolean,
      observer: 'setHeight'
    },
    placeholder: {
      type: Boolean,
      observer: 'setHeight'
    },
    leftText: String,
    rightText: String,
    customStyle: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 1
    },
    safeAreaInsetTop: {
      type: Boolean,
      value: true
    }
  },
  data: {
    statusBarHeight: 0,
    height: 44,
    baseStyle: ''
  },
  created: function created() {
    var _getSystemInfoSync = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__[/* getSystemInfoSync */ "a"])(),
        statusBarHeight = _getSystemInfoSync.statusBarHeight;

    var _this$data = this.data,
        safeAreaInsetTop = _this$data.safeAreaInsetTop,
        zIndex = _this$data.zIndex;
    var paddingTop = safeAreaInsetTop ? statusBarHeight : 0;
    var baseStyle = "z-index: ".concat(zIndex, ";padding-top: ").concat(paddingTop, "px;");
    this.setData({
      statusBarHeight: statusBarHeight,
      height: 44 + statusBarHeight,
      baseStyle: baseStyle
    });
  },
  mounted: function mounted() {
    this.setHeight();
  },
  methods: {
    onClickLeft: function onClickLeft() {
      this.$emit('click-left');
    },
    onClickRight: function onClickRight() {
      this.$emit('click-right');
    },
    setHeight: function setHeight() {
      var _this = this;

      if (!this.data.fixed || !this.data.placeholder) {
        return;
      }

      wx.nextTick(function () {
        _this.getRect('.van-nav-bar').then(function (res) {
          _this.setData({
            height: res.height
          });
        });
      });
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/dist/nav-bar/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map