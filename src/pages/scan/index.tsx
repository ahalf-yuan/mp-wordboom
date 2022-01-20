import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text, Slot } from "@tarojs/components";
import "./index.scss";

export default class Test extends Component {
  state = {
    show: false,
    date: "",
    uuid: "",
  };

  componentWillMount() {
    const query = Taro.getCurrentInstance().router.params || {};
    const { scene: uuid } = query;
    this.setState({ uuid });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onReachBottom() {}

  // doLogin(userInfo) {
  //   wx.cloud
  //     .callFunction({
  //       name: "openid_login",
  //       data: {
  //         uuid: this.state.uuid,
  //         userInfo: userInfo,
  //       },
  //     })
  //     .then((res) => {
  //       // this.authed = 1
  //       console.log("res =>", res);
  //     });
  // }

  /**
   * 一键登陆
   * @param e
   */
  handleWxLogin = (e) => {
    wx.cloud
      .callFunction({
        name: "openid_login",
        data: {
          uuid: this.state.uuid,
        },
      })
      .then((res) => {
        // this.authed = 1
        console.log("res =>", res);
      });
  };

  render() {
    return (
      <View className="card-list-wrapper">
        <View className="btn-wrapper">
          <van-button
            color="#7232dd"
            size="large"
            plain
            onClick={this.handleWxLogin}
          >
            微信一键登陆
          </van-button>
        </View>
      </View>
    );
  }
}
