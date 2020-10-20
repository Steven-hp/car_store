/* 引入express包 */
const express=require("express");
/* 引入 pro商品路由器*/
const proRouter=require("./router/ajax.js");
/* 引入body-parser模块 */
const bodyParser=require("body-parser");
/* 创建web服务器 */
const app=express();
/* 设置服务器端口 */
app.listen(80);

/* 托管静态资源到目录文件public */
app.use( express.static("./public") );
/* 和body-parser模块连接，将post请求数据解析为对象 */
app.use( bodyParser.urlencoded({
	extended:false    //没有;
	//是否使用扩展的查询字符串模块qs:false为不使用,会用官方提供的querystring,true为使用结果一样，但大多默认使用false
}));
/* 挂载服务器，并添加前缀 */
app.use("/ajax",ajsxRouter);















