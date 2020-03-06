/**
 * Created by fjl on 2019/12/30
 */
import axios from 'axios';
import {REQ_BASE_URL} from './constant';
import {IResponseDataModal} from './global.d';
axios.defaults.baseURL = REQ_BASE_URL;
// 添加响应拦截器
axios.interceptors.response.use((response) => {
	if (response.config.url!.indexOf('/dimg') >= 0) {
		return {
			data: response.data,
			errno: 0,
			errmsg: '',
			OK: true,
		};
	}
	const {data: {data, errno, errmsg}} = response;
	const OK: boolean = errno === 0;
	const formatedResponse: IResponseDataModal = {
		data, errno, errmsg, OK,
	};
	if (OK) {
		return formatedResponse as any;
	}
	return Promise.reject(formatedResponse);
}, (error: any) => {
	return Promise.reject(error);
});

export default axios;
