import { useGlobalIconFont } from './components/iconfont/helper';
export default {
  pages: [
    'pages/index/index',
    'pages/about/index',
    'pages/cardList/index',
    'customs/swiper/test/index',
    'pages/catalog/index',
    'pages/scan/index',
    'pages/preview/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WordBoom',
    navigationBarTextStyle: 'black'
  },
  usingComponents: Object.assign(useGlobalIconFont()),
}
