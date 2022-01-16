import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Slot } from "@tarojs/components";
import Api from "../api/index";

import mockData from "./mock";

import "./index.scss";

interface IProps {}

interface IState {
  detail: any;
  show: boolean;
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
  state: IState = {
    detail: {},
    show: false,
  };

  componentWillMount() {
    this.fetchTransData();
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

    const {
      exchange = {},
      items = [],
      symbols = [],
      word_name,
    } = res.data || {};
    const { parts: meanParts, ...other } = symbols[0] || {};
    const detail = {
      exchange,
      items,
      symbols,
      word_name,
      meanParts,
      phItems: other, // 读音, ph_am, ph_en, ph_am_mp3, ph_en_mp3, ph_other
    };

    this.setState({ detail });
  }

  onClickLeft() {
    // wx.showToast({ title: "点击返回", icon: "none" });
  }
  onClickRight() {
    wx.showToast({ title: "点击按钮", icon: "none" });
  }

  render() {
    const { detail, show } = this.state;
    const { phItems = {}, meanParts = [], exchange = {} } = detail || {};
    console.log(detail);

    const newExchnage = Object.entries(exchange).map(
      ([key, value]) =>
        value && {
          title: EXCHANGE[key],
          value,
        }
    );

    // MOCK
    const cards = [
      {
        wordName: detail.word_name,
        phItems,
        meanParts,
        sentence:
          "One of the reasons that flexbox quickly caught the interest of web developers is that it brought proper alignment capabilities to the web for the first time.",
        exchange: newExchnage,
      },
      {
        wordName: "Accessibility",
        phItems,
        sentence:
          'Currently, she’s working on a new course, "Practical Accessibility," meant to teach devs and designers ways to make their products accessible.',
        meanParts,
        exchange: newExchnage,
      },
      {
        wordName: "test",
        phItems,
        meanParts,
        exchange: newExchnage,
      },
    ];

    return (
      <View className="page-wrapper">
        <van-nav-bar
          title="分类标题"
          leftText="返回"
          leftArrow
          onClickLeft={this.onClickLeft}
          onClickRight={this.onClickRight}
          safeAreaInsetTop={true}
        >
          {/* <Slot name="left">
            <View style={{ position: "absolute", top: 0 }}>
              <van-icon name="arrow-left" /> 返回
            </View>
          </Slot> */}
        </van-nav-bar>
        <View className="page-content">
          <View className="header-wrapper">12/234</View>

          <View className="content-wrapper">
            <card-swipe className="card-swipe" cards={cards}></card-swipe>
          </View>

          <View className="footer-wrapper">
            <View className="menu-btn">
              <van-button round customClass="back-btn">
                返回
              </van-button>
              <van-button customClass="middle-btn" round style={{ flex: 1 }}>
                设置
              </van-button>
              <van-button round customClass="next-btn">
                下一个
              </van-button>
            </View>
            <View className="link-tag">标记为已掌握</View>
          </View>
        </View>
      </View>
    );
  }
}
