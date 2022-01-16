import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Slot } from "@tarojs/components";
import Api from "../api/index";

import mockData from "./mock";

import "./index.scss";

interface IProps {}

interface IState {
  cards: any;
  show: boolean;
  total: number;
  current: number;
}

const EXCHANGE = {
  word_pl: "复数",
  word_past: "过去式",
  word_done: "过去分词",
  word_ing: "现在分词",
  word_third: "第三人称单数",
  word_er: "比较级",
  word_est: "最高级",
};

export default class About extends Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      total: 1,
      current: 1,
    };
  }

  async componentWillMount() {
    const cards = await this.fetchTransData();
    this.setState({ cards });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onReachBottom() {
    console.log("===s=sdsds");
  }

  async fetchTransData() {
    // const res = await Api.fetchWordDetail({
    //   w: "go",
    // });

    // TEST
    const res = mockData;

    if (!res || !res.data) return;

    //   exchange ,
    //   word_name,
    //   sentence,
    //   mean_parts,
    //   phs,// 读音, ph_am, ph_en, ph_am_mp3, ph_en_mp3, ph_other

    const { data: cards, total } = res;
    console.log(cards);

    cards.forEach((item: any) => {
      if (Array.isArray(item.exchange)) return;
      item.exchange = Object.entries(item.exchange).map(
        ([key, value]) =>
          value && {
            title: EXCHANGE[key],
            value,
          }
      );
    });

    this.setState({ total });
    return cards;
  }

  cardSwipe = (e) => {
    // direction: 'left' 'right'
    const { direction, swiped_card_index, current_cursor } = e.detail;
    console.log(e.detail);

    this.setState({ current: current_cursor + 1 });
    this.addCards(swiped_card_index);
  };

  async addCards(swipedCardIndex) {
    const { cards } = this.state;
    if (swipedCardIndex === cards.length - 1) {
      // request & addCards
      const data = await this.fetchTransData();
      data && data.length > 0 && this.setState({ cards: [...cards, ...data] });
    }
  }

  onClickLeft() {
    // wx.showToast({ title: "点击返回", icon: "none" });
  }

  render() {
    const { cards, total, current } = this.state;

    return (
      <View className="page-wrapper">
        <van-nav-bar
          title="分类标题"
          leftText="返回"
          leftArrow
          onClickLeft={this.onClickLeft}
          onClickRight={this.onClickRight}
          safeAreaInsetTop={true}
        />
        <View className="page-content">
          <View className="header-wrapper">
            {current}/{total}
          </View>

          <View className="content-wrapper">
            <card-swipe
              className="card-swipe"
              oncardSwipe={this.cardSwipe}
              cards={cards}
            ></card-swipe>
          </View>

          <View className="footer-wrapper">
            {/* TODO */}
            {/* <View className="menu-btn">
              <van-button
                round
                customClass="back-btn"
                onClick={this.setPreCard}
              >
                上一个
              </van-button>
              <van-button customClass="middle-btn" round style={{ flex: 1 }}>
                设置
              </van-button>
              <van-button
                round
                customClass="next-btn"
                onClick={this.getNextCard}
              >
                下一个
              </van-button>
            </View> */}
            <View className="link-tag">标记为已掌握</View>
          </View>
        </View>
      </View>
    );
  }
}
