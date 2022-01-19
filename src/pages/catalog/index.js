import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text, Slot } from "@tarojs/components";
import { transRawToStructure } from "./helper";
import IconFont from "../../components/iconfont";

import mockData from "./mock";

import "./index.scss";

export default class Catalog extends Component {
  state = {
    show: false,
    date: "",
    treeMap: {},
    unCatalog: [],
  };

  componentWillMount() {}

  componentDidMount() {
    const [unCatalog, treeMap] = transRawToStructure(mockData);
    this.setState({
      treeMap,
      unCatalog,
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onReachBottom() {
    console.log("===s=sdsds");
  }

  handleClickCell = (id) => {
    const { treeMap } = this.state;
    if (!treeMap[id].children) return;
    treeMap[id].isShow = !treeMap[id].isShow;
    this.setState({ treeMap });
  };


  renderTree(root, level = 0) {
    if (!root || root.children <= 0) return;

    const { treeMap } = this.state;

    return (
      root && (
        <van-cell-group customClass="custom-cell-group">
          {root.map((key) => {
            const {
              id,
              title,
              isShow: isShowChildren,
              children,
            } = treeMap[key];
            return (
              <>
                <van-cell customClass="custom-cell" size="large">
                  <Slot name="title">
                    <View className="slot-title">
                      <IconFont name={children ? "File1" : "File"} size={40} />
                      <Text className="title">{title}</Text>
                    </View>
                  </Slot>
                  {/* 如果存在子节点，图标变化 */}

                  <Slot name="right-icon">
                    <View
                      className="icon-wrapper"
                      onClick={() => this.handleClickCell(id)}
                    >
                      <Text className="title">{id}</Text>
                      {children ? (
                        <IconFont
                          name={
                            !isShowChildren
                              ? "jiantou_yemian_xiangyou"
                              : "jiantou_yemian_xiangxia"
                          }
                          color="#969799"
                          size={40}
                        />
                      ) : (
                        ""
                        // <IconFont
                        //   name="jiantou_liebiaoxiangyou"
                        //   color="#969799"
                        //   size={40}
                        // />
                      )}
                    </View>
                  </Slot>
                </van-cell>

                {/* 是否显示子节点 */}
                {isShowChildren && this.renderTree(children, level++)}
              </>
            );
          })}
        </van-cell-group>
      )
    );
  }

  render() {
    const { unCatalog, treeMap } = this.state;
    const root = (treeMap["-1"] && treeMap["-1"].children) || [];
    return (
      <View className="catalog-list-wrapper">
        <View className="menu-wrapper">
          <van-cell-group customClass="custom-cell-group">
            {unCatalog.map((item) => (
              <van-cell title={item.title} value="未分类" />
            ))}
          </van-cell-group>
        </View>

        <View className="catalog-wrapper">{this.renderTree(root)}</View>
      </View>
    );
  }
}
