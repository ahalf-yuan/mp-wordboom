import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import Api from "../api/index";
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
};

export default class About extends Component<IProps, IState> {
  state: IState = {
    detail: {},
    show: false,
  };

  componentWillMount() {
    // Taro.setNavigationBarTitle({
    //   title: '分类名称' // from params
    // })
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
    const res = await Api.fetchWordDetail({
      w: "go",
    });

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

    const newExchnage = Object.entries(exchange).map(([key, value]) => {
      return {
        title: EXCHANGE[key],
        value,
      }
    });

    // MOCK
    const cards = [
      {
        title: '123',
        wordName: detail.word_name,
        phItems,
        meanParts,
        exchange: newExchnage
      },
      {
        title: '123',
        wordName: detail.word_name,
        phItems,
        meanParts,
        exchange: newExchnage
      },
      {
        title: '123',
        wordName: detail.word_name,
        phItems,
        meanParts,
        exchange: newExchnage
      }
    ]

    return (
      <View className="page-wrapper">
        <van-nav-bar
          title="分类标题"
          leftText="返回"
          leftArrow
          onClickLeft={this.onClickLeft}
          onClickRight={this.onClickRight}
        />
        <View className="header-wrapper">header</View>

        <View className="content-wrapper">
          内容
          <card-swipe
            className="card-swipe"
            cards={cards}
          ></card-swipe>
        </View>

        <View className="footer-wrapper">
          <View>标记为已掌握</View>
        </View>
      </View>
    );
  }
}
