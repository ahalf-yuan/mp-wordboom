(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["customs/swiper/cardSwipe/cardSwipe"],{

/***/ "./src/customs/swiper/cardSwipe/cardSwipe.js":
/*!***************************************************!*\
  !*** ./src/customs/swiper/cardSwipe/cardSwipe.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
 * @Author: jesse zhao 
 * @Date: 2020-04-07 02:41:53 
 * @Last Modified by: jesse zhao
 * @Last Modified time: 2020-04-20 03:13:52
 * @github: https://github.com/1esse/cardSwipe
 */
Component({
  properties: {
    cards: Array,
    // 卡片数据，一个包含所有卡片对象的数组
    removedCards: Array,
    // 存放已经移除的卡片的索引数据，如果索引填充了其他卡片，需要将该索引移出
    transition: Boolean,
    // 是否开启过渡动画
    circling: Boolean,
    // 是否列表循环
    rotateDeg: Number,
    // 整个滑动过程旋转角度
    showCards: {
      // 显示几张卡片
      type: Number,
      value: 3
    },
    slideDuration: {
      // 手指离开屏幕后滑出界面时长，单位(ms)毫秒
      type: Number,
      value: 200
    },
    slideThershold: {
      // 松手后滑出界面阈值，单位px
      type: Number,
      value: 60
    },
    upHeight: {
      // 下层卡片下移高度，单位px
      type: Number,
      value: 40
    },
    scaleRatio: {
      // 下层卡片收缩力度
      type: Number,
      value: 0.05
    }
  },
  observers: {
    cards: function cards(nc, oc) {
      if (!nc) return;
      this.cardReflect();
    },
    showCards: function showCards(nc, oc) {
      // 用于展示调节用，一般情况下展示卡片数量是固定的，不需要监听变化。
      if (!nc) return;
      this.cardReflect();
    }
  },
  data: {
    just_shown: -1 // 如果显示卡片的数量和卡片总数量一样，那么开启循环的时候，被设置过transform的节点不会重新渲染，这会导致已经滑出界面的卡片无法回归原位，这个字段就是用来控制滑出卡片重新渲染的

  },
  attached: function attached() {
    // 给每张卡片设置层级
    var cards = this.data.cards;
    this.setData({
      current_cursor: cards.findIndex(function (item) {
        return item;
      })
    });
    this.getContextWidth();
  },
  methods: {
    cardReflect: function cardReflect() {
      var _this$data = this.data,
          cards = _this$data.cards,
          showCards = _this$data.showCards;
      var sc = showCards;
      if (showCards < 1) sc = 1;else if (showCards > cards.filter(function (item) {
        return item;
      }).length) sc = cards.filter(function (item) {
        return item;
      }).length;
      this.setData({
        current_z_index: new Array(sc).fill(0).map(function (_, index) {
          return index + 1;
        }).reverse(),
        sc: sc
      });
    },
    getContextWidth: function getContextWidth() {
      var _this = this;

      var query = this.createSelectorQuery();
      query.select('.wrapper').boundingClientRect();
      query.exec(function (res) {
        var contextWidth = res[0].width;

        _this.setData({
          contextWidth: contextWidth
        });
      });
    },
    nextCard: function nextCard(e) {
      var _this2 = this;

      var _this$data2 = this.data,
          current_cursor = _this$data2.current_cursor,
          just_shown = _this$data2.just_shown,
          slideDuration = _this$data2.slideDuration;
      just_shown = current_cursor;
      current_cursor = this.countCurrentCursor(current_cursor);
      Object.assign(e, {
        swiped_card_index: just_shown,
        current_cursor: current_cursor
      });
      setTimeout(function () {
        _this2.setData({
          just_shown: just_shown
        }, function () {
          _this2.setData({
            just_shown: -1,
            current_cursor: current_cursor
          });
        });
      }, slideDuration);
      this.triggerEvent('cardSwipe', e);
    },
    countCurrentCursor: function countCurrentCursor(current_cursor) {
      var _this$data3 = this.data,
          circling = _this$data3.circling,
          cards = _this$data3.cards,
          removedCards = _this$data3.removedCards;
      if (circling) // 如果开启循环
        current_cursor = current_cursor + 1 === cards.length ? 0 : current_cursor + 1;else current_cursor += 1;
      if (!removedCards.includes(current_cursor)) return current_cursor;
      return this.countCurrentCursor(current_cursor);
    }
  }
});

/***/ })

},[["./src/customs/swiper/cardSwipe/cardSwipe.js","runtime"]]]);
//# sourceMappingURL=cardSwipe.js.map