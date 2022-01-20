import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text, Slot } from "@tarojs/components";
// import Dialog from "../../components/vant-weapp/dist/dialog/dialog";
import Api from "../api/index";
import mockSentence from "./mockSentence";
import mockHot from "./mockHot";

import "./index.scss";

const defaultSVG =
  "https://636c-cloud1-2gi44ltz64d95ce2-1309250757.tcb.qcloud.la/%E8%AF%8D%E5%85%B83.svg?sign=104a93c4e08b40005076a786d406471d&t=1642692065";

export default class Index extends Component {
  state = {
    dailyData: {},
  };

  componentWillMount() {}

  componentDidMount() {
    this.fetchDailySentence();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onReachBottom() {
    console.log("===s=sdsds");
  }

  async fetchDailySentence() {
    // const res = await Api.fetchDailySentence("");
    this.setState({ dailyData: mockSentence });
  }

  render() {
    const { dailyData } = this.state || {};
    const { picture2, content, note } = dailyData || {};
    console.log(picture2);
    return (
      <View className="index-wrapper">
        <van-nav-bar customClass="custom-nav-bar" safeAreaInsetTop={true}>
          <Slot name="title">WordBoom</Slot>
        </van-nav-bar>
        <View className="content-relative">
          <View className="content-wrapper">
            <View className="daily-sentence-card">
              <van-image
                customClass="custom-image"
                width="100%"
                height="320rpx"
                fit="cover"
                src={picture2}
              />
              <Text className="tag">每日一句</Text>
              <View className="bottom">
                <Text className="title">{content}</Text>
                <Text className="note">{note}</Text>
              </View>
            </View>

            <View className="hot-wrapper">
              <Text className="hot-title">热门推荐</Text>
              {mockHot.map((item) => (
                <View className="card-item">
                  <View className="left-box">
                    <van-image
                      customClass="custom-image"
                      width="50"
                      height="50"
                      fit="cover"
                      src={item.icon ? item.icon : defaultSVG}
                    />
                  </View>
                  <View className="right-box">
                    <Text className="title">{item.title}</Text>
                    <Text className="detail">{item.detail}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
