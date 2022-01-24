import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, Slot, WebView } from '@tarojs/components'
import './index.scss'

export default class Preview extends Component {
  state = {
    previeUrl: ""
  }

  componentWillMount() {
    const query = Taro.getCurrentInstance().router.params || {};
    this.setState({
      previeUrl: query.url
    })
  }

  handleMessage () {}
  
  render () {
    return (
      <WebView src={this.state.previeUrl} onMessage={this.handleMessage} />
    )
  }
}