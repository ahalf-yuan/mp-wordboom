/**
 * https://developers.weixin.qq.com/community/develop/article/doc/000a6e52170f806158bc3173d5b013
 */

import Taro from '@tarojs/taro'
import interceptors from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))
// 模块，命名空间，基础接口声明，此处不作解释 自行了解，结尾提供文档指引
declare namespace RequestProps {
  interface Method {
    'GET',
    'POST',
    'PUT',
    'DELETE'
  }
  interface Options {
    url: string,
    method: keyof Method,
    data: any,
    loading?: boolean,
    loadingTitle?: string,
    contentType?: string,
    openErrTips?: boolean
  }
  interface requestParams {
    url: string,
    method: keyof Method,
    data: any,
    header: any,
    loading?: boolean,
    loadingTitle?: string,
    contentType?: string,
    openErrTips?: boolean
  }
}

/**
* 获取版本 retrun 对应环境域名
* develop: '开发版', trial: '体验版', release: '正式版'
* 支持扩展 - 思路 可通过 process.env.NODE_ENV 判断当前打包是 生产模式或工厂模式 进而判断 适合多环境 dev -> beta -> uat -> pro
* @returns 域名
*/
const getVersion = () => {
  // @ts-ignore
  switch (__wxConfig.envVersion) {
    case 'develop':
      return 'http://localhost:8080'

    case 'trial':
      return 'http://trial.gavinpeng.club'

    case 'release':
      return 'http://release.gavinpeng.club'

    default:
      return 'http://develop.gavinpeng.club'
  }
}


class Request {
  baseOptions(options: RequestProps.Options) {
    let { url, method, data } = options
    // 过滤 扩展属性
    let { loading, loadingTitle, contentType, openErrTips, ...rest } = data

    if (loading) Taro.showLoading({ title: loadingTitle || '加载中...', mask: true })
    const requestParams: RequestProps.requestParams = {
      url: getVersion() + url,
      method,
      data: rest,
      header: {
        // 支持自定义 contentType
        'content-type': contentType || 'application/json',
        // Token
        'Authorization': Taro.getStorageSync('token'),
        // @TEST
        "Cookie": "wordhub_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxIiwiZXhwIjoxNjQyNzQ4NDM2fQ.xTQZ1hF-rlmx-VDwy0Bl2DCv3P0WWea39arKXjWea_8"
        // 此处支持扩展，可通过请求 data 参数中加入 header 对象，在上面过滤 语法糖 ...header 此处就不做过多解释，需要的自行添加了解
        // ...header
      },
      // 请求是否带 loading， 传递到 请求响应拦截器 清除 loading 
      loading,
      openErrTips
    }
    return Taro.request(requestParams)
  }

  get(url: string, data: any) {
    return this.baseOptions({ url, method: 'GET', data })
  }

  post(url: string, data: any) {
    return this.baseOptions({ url, method: 'POST', data })
  }
}

export default new Request()