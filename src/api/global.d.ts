/**
 * Created by fjl on 2019/12/30
 */
// 规范响应数据的类型
export interface IResponseDataModal {
	OK: boolean; // 后端响应是否完全ok
	errno: number; // 响应码
	errmsg: string | undefined; // 响应信息
	data: any; // 响应数据
}
