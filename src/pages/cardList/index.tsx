import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text, Slot } from "@tarojs/components";
import { getCardList } from "./config";
import mockData from "./mock";

import "./index.scss";

export default class cardList extends Component {
  state = {
    title: "词汇列表",
    show: false,
    list: [],
  };

  componentWillMount() {
    const query = Taro.getCurrentInstance().router.params || {};
    const { type, title } = query;
    const dataList = getCardList(type);
    this.setState(
      {
        list: dataList,
        title,
      },
      () => {
        // set navbar title
        Taro.setNavigationBarTitle({
          title: title || '词汇列表',
        });
      }
    );
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

    const { data: cards } = res;
    const list = cards.map(({ word_name, mean_parts }) => ({
      word_name,
      mean: mean_parts[0],
    }));
    this.setState({ list });
  }

  render() {
    const { list = [] } = this.state;
    return (
      <View className="card-list-wrapper">
        {list.map((item) => (
          <view className="card-item">
            <Text className="word">{item.word}</Text>
            <view className="mean">
              <Text className="zh-trans">{item.trans}</Text>
            </view>
          </view>
        ))}
      </View>
    );
  }
}
