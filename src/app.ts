import { Component } from 'react'
import './app.scss'

class App extends Component {

  componentDidMount() {
    wx.cloud.init({
      env: 'cloud1-2gi44ltz64d95ce2',
      traceUser: true
    })

    // 云函数调用
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res)
    })
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
