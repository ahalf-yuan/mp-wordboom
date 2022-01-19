import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text, Slot } from "@tarojs/components";
import Dialog from "../../components/vant-weapp/dist/dialog/dialog";
import "./index.scss";

export default class Index extends Component {
  state = {
    show: false,
    date: "",
  };

  // $instance = getCurrentInstance()

  componentWillMount() {}

  componentDidMount() {
    const query = Taro.getCurrentInstance().router.params;
    console.log("query ==>", query);

    setTimeout(() => {
      Dialog.confirm({
        title: "标题",
        message: JSON.stringify(query),
      });
    }, 1000);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onReachBottom() {
    console.log("===s=sdsds");
  }

  showCalendar = () => {
    this.setState({
      show: true,
    });
  };

  closeCalendar = () => {
    this.setState({
      show: false,
    });
  };

  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }

  onConfirm = (event) => {
    console.log(event);
    this.setState({
      show: false,
      date: this.formatDate(event.detail),
    });
  };

  render() {
    const { show, date } = this.state;
    return (
      <View className="index">
        <van-button type="primary" onClick={this.showCalendar}>
          显示日历
        </van-button>
        <van-calendar
          show={show}
          showConfirm
          type="range"
          onClose={this.closeCalendar}
          onConfirm={this.onConfirm}
        >
          <Slot name="title">
            <View>Hello world</View>
          </Slot>
        </van-calendar>
        <View>{date}</View>
        <View>
          <Text
            onClick={() => {
              Taro.navigateTo({ url: "/pages/about/index" });
            }}
          >
            Hello world!
          </Text>
        </View>
        <van-dialog id="van-dialog" />
      </View>
    );
  }
}
