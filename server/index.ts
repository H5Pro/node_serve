/**
 * Created by fjl on 2019/11/26
 */
import Koa from 'koa';
import KoaRouter from 'koa-router';
import koaBody from 'koa-body';
import KoaStatic from 'koa-static';
import cors from 'koa2-cors';
import path from 'path';
const router = new KoaRouter();
const app = new Koa();

const startTime = new Date().getTime();

if (process.env.NODE_ENV === 'development') {
	// 允许的域名请求
	app.use(cors({
		origin: () => '*',
	}));
}

app.use(koaBody({
	multipart: true,
	formidable: {
		maxFileSize: 200 * 1024 * 1024,	// 设置上传文件大小最大限制，默认2M
		keepExtensions: true,     // 保持源文件的扩展
	},
}));

router.get('/getToken', async (ctx, next) => {
	console.log(12345);
	next();
});

app.use(router.routes());
app.use(KoaStatic(path.resolve(__dirname, '../dist')));
const port = process.env.NODE_ENV === 'development' ? 3000 : 4000;
app.listen(port);

const endTime = new Date().getTime();
console.log(`Server launch spend ${endTime - startTime} ms.`);
console.log(`Server running on port ${port}.`);

