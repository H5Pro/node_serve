/**
 * Created by fjl on 2020/3/6
 */
import axios from './axios';
export default class API {
	public static getToken() {
		return axios.get('getToken');
	}
}
