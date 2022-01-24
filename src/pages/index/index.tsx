import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text, Slot, Navigator } from "@tarojs/components";
// import Dialog from "../../components/vant-weapp/dist/dialog/dialog";
import Api from "../api/index";
import { Articles, cloudhost, vocabulary } from "./config";
import mockSentence from "./mockSentence";
import mockHot from "./mockHot";

import "./index.scss";

const defaultSVG =
  "https://636c-cloud1-2gi44ltz64d95ce2-1309250757.tcb.qcloud.la/%E8%AF%8D%E5%85%B83.svg?sign=104a93c4e08b40005076a786d406471d&t=1642692065";

export default class Index extends Component {
  state = {
    dailyData: {},
  };

  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '专业词汇积累 👍👍',
      path: '/pages/index/index'
    }
  }

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

  handleClickSetItem = (value) => {
    const {key, title} = value;
    // Navigator
    Taro.navigateTo({
      url: `/pages/cardList/index?type=${key}&title=${title}`,
    });
  };

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
              <Text className="hot-title">文章推荐</Text>
              <View className="article-wrapper">
                {Articles.map((item) => (
                  <van-cell
                    title={item.title}
                    isLink={true}
                    url={`/pages/preview/index?url=${cloudhost + item.link}`}
                  />
                ))}
              </View>
            </View>

            <View className="hot-wrapper">
              <Text className="hot-title">词汇集合</Text>
              <View className="card-wrapper">
                {vocabulary.map((item) => (
                  <View
                    className="card-item"
                    onClick={() => this.handleClickSetItem(item)}
                  >
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
      </View>
    );
  }
}
