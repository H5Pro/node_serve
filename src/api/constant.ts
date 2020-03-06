/**
 * Created by fjl on 2020/3/1
 */

// 服务器的url地址
export const REQ_BASE_URL = process.env.NODE_ENV === 'development'
	? (location.protocol + '//' + location.hostname + ':' + 3000) : '';
