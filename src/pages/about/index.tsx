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
          {/* card content */}
          <View className="card-wrapper">
            <Text className="word-name">{detail.word_name}</Text>

            {/* 读音 */}
            <View className="pronounce-box">
              <View className="item">
                <van-icon name="volume-o" className="icon-item" />英
                <Text className="ph-item">[{phItems.ph_en}]</Text>
              </View>
              <View className="item">
                <van-icon name="volume-o" className="icon-item" />美
                <Text className="ph-item">[{phItems.ph_am}]</Text>
              </View>
            </View>

            {/* 解释 */}
            <View className="mean-box">
              {meanParts.map((item) => (
                <View className="item">
                  <Text className="mean-part">{item.part}</Text>
                  <Text>{item.means.join("；")}</Text>
                </View>
              ))}
            </View>

            {/* TODO */}
            {/* 上下文 */}
            <van-divider contentPosition="left">上下文</van-divider>
            <Text>ssd</Text>

            <van-divider dashed />

            {/* 变形 */}
            <View className="exchange-box">
              {Object.entries(exchange).map(([key, value]) => (
                <View className="item">
                  <Text className="label">{EXCHANGE[key]}</Text>
                  <Text className="exchange">{value as string}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View className="footer-wrapper">
          <View>标记为已掌握</View>
        </View>
      </View>
    );
  }
}
