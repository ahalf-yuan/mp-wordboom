import { useGlobalIconFont } from './components/iconfont/helper';
export default {
  pages: [
    'pages/about/index',
    'pages/index/index',
    'pages/cardList/index',
    'customs/swiper/test/index',
    'pages/catalog/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  usingComponents: Object.assign(useGlobalIconFont()),
}
