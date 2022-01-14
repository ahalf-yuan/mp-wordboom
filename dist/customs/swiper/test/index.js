(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["customs/swiper/test/index"],{

/***/ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/customs/swiper/test/index.js":
/*!******************************************!*\
  !*** ./src/customs/swiper/test/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/_@babel_runtime@7.16.7@@babel/runtime/helpers/defineProperty.js");

//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    cards: [],
    // 卡片数据，一个包含所有卡片对象的数组
    removed_cards: [],
    // 存放已经移除的卡片的索引数据，如果索引填充了其他卡片，需要将该索引移出
    transition: true,
    //是否开启过渡动画
    circling: false,
    // 是否列表循环
    rotate_deg: 0,
    // 整个滑动过程旋转角度
    slide_duration: 200,
    // 手指离开屏幕后滑出界面时长，单位(ms)毫秒
    show_cards: 3,
    // 显示几张卡片
    thershold: 60,
    // 松手后滑出界面阈值，单位px
    scale_ratio: 0.07,
    // 下层卡片收缩力度
    up_height: 40 // 下层卡片下移高度，单位rpx

  },
  onLoad: function onLoad() {
    this.generateCards(5);
  },
  generateCards: function generateCards(num) {
    var cards = [];

    for (var i = 0; i < num; i++) {
      cards.push({
        title: "\u5361\u7247".concat(i + 1),
        src: "https://source.unsplash.com/collection/190727/500x600?id=".concat(i),
        desc: "\u8FD9\u662F\u4E00\u6BB5\u5361\u7247".concat(i + 1, "\u7684\u63CF\u8FF0\u3002")
      });
    }

    this.setData({
      cards: cards,
      current_cursor: cards.findIndex(function (item) {
        return item;
      }),
      removed_cards: []
    });
  },
  onSwitch: function onSwitch(e) {
    var symbol = e.currentTarget.dataset.symbol;

    switch (symbol) {
      case 'loop':
        this.setData({
          circling: e.detail.value
        });
        break;

      case 'transition':
        this.setData({
          transition: e.detail.value
        });
        break;
    }
  },
  onSlide: function onSlide(e) {
    var symbol = e.currentTarget.dataset.symbol;

    switch (symbol) {
      case 'show_cards':
      case 'rotate_deg':
      case 'slide_duration':
        this.setData(_defineProperty({}, symbol, e.detail.value));
        break;
    }
  },
  cardOperate: function cardOperate(e) {
    var _this = this,
        _this$setData3;

    var symbol = e.currentTarget.dataset.symbol;
    var cards = this.data.cards;

    switch (symbol) {
      case 'add':
        this.setData(_defineProperty({}, "cards[".concat(cards.length, "]"), {
          title: "\u65B0\u589E\u5361\u7247".concat(cards.length + 1),
          src: "https://source.unsplash.com/collection/190727/600x600?id=".concat(cards.length + 1),
          desc: "\u8FD9\u662F\u4E00\u6BB5\u65B0\u589E\u5361\u7247".concat(cards.length + 1, "\u7684\u63CF\u8FF0\u3002")
        }));
        break;

      case 'reset':
        this.setData({
          cards: null
        }, function () {
          _this.generateCards(5);
        });
        break;

      case 'remove':
        var removeIndex = e.currentTarget.dataset.removeIndex;
        var removed_cards = this.data.removed_cards;
        if (removed_cards.includes(parseInt(removeIndex))) return;
        removed_cards.push(parseInt(removeIndex));
        this.setData((_this$setData3 = {}, _defineProperty(_this$setData3, "cards[".concat(removeIndex, "]"), null), _defineProperty(_this$setData3, "removed_cards", removed_cards), _this$setData3));
        break;
    }
  },
  cardSwipe: function cardSwipe(e) {
    var _e$detail = e.detail,
        direction = _e$detail.direction,
        swiped_card_index = _e$detail.swiped_card_index,
        current_cursor = _e$detail.current_cursor;
    console.log(e.detail);
    wx.showToast({
      title: "\u5361\u7247".concat(swiped_card_index + 1, "\u5411").concat(direction === 'left' ? '左' : '右', "\u6ED1"),
      icon: 'none',
      duration: 1000
    });
    this.setData({
      current_cursor: current_cursor
    });
  }
});

/***/ })

},[["./src/customs/swiper/test/index.js","runtime"]]]);
//# sourceMappingURL=index.js.map