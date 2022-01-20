/*
* @Author: Gavin
* @CreateTime: xxxx
* @Describe: 测试模块相关接口
*/
// 引入封装后的请求方法
import request from '../service/index'

/**
* 获取单个详情
* @param {w: string} 
* @returns 
*/
export const fetchWordDetail = (data: any) => {
    return request.get('/api/trans/iciba', data);
}

/**
 * 获取每日一句
 * @param data null
 * @returns 
 */
export const fetchDailySentence = (data) => {
    return request.get('/api/trans/iciba/sentence', data);
}