import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, Slot } from '@tarojs/components'
import './index.scss'

export default class Test extends Component {

  state = {
    show: false,
    date: ''
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onReachBottom () {
    console.log('===s=sdsds')
  }

  render () {
    return (
      <View className='card-list-wrapper'>
      </View>
    )
  }
}
