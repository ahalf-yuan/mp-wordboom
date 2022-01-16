import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Slot, Text } from "@tarojs/components";
// import Dialog from '../../components/vant-weapp/dist/dialog/dialog';
import Api from "../api/index";

import cgtSvg from "../../assets/imgs/cgt.svg";

import mockData from "./mock";

import "./index.scss";

interface IProps {}

interface IState {
  cards: any;
  show: boolean;
  total: number;
  current: number;
  cardsDoneMap: object;
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
      show: false,
      cardsDoneMap: {},
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
    // console.log(Taro.getCurrentPages().length)
    Taro.navigateBack({
      delta: 1, // 返回上一级页面。
    }).catch(() => {
      Taro.redirectTo({
        url: "/pages/index/index",
      });
    });
  }

  handleTagDone = () => {
    this.setState({ show: true })
  };

  onConfirm = () => {
    const {cardsDoneMap, current} = this.state;
    cardsDoneMap[current] = true;;
    this.setState({ show: false, cardsDoneMap: {...cardsDoneMap} });
  };

  render() {
    const { cards, total, current, show, cardsDoneMap } = this.state;
    const done = cardsDoneMap[current];

    return (
      <View className="page-wrapper">
        <van-nav-bar
          title="分类标题"
          leftText="返回"
          leftArrow
          onClickLeft={this.onClickLeft}
          safeAreaInsetTop={true}
        />
        <View className="page-content">
          <View className="header-wrapper">
            {current}/{total}
          </View>

          <View className="content-wrapper">
            {done && <van-tag customClass="tag-done">已掌握</van-tag>}
            <card-swipe
              className="card-swipe"
              oncardSwipe={this.cardSwipe}
              cards={cards}
              scaleRatio={0}
              upHeight={0}
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
            <View className="link-tag" onClick={this.handleTagDone}>
              标记为已掌握
            </View>
          </View>
        </View>

        <van-dialog
          useSlot
          title="词汇已掌握"
          show={show}
          showCancelButton={false}
          onConfirm={this.onConfirm}
          customStyle="text-align:center;"
          confirmButtonColor="#000"
        >
          <van-image width="100" height="100" src={cgtSvg} />
        </van-dialog>
      </View>
    );
  }
}
