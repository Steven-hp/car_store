const express=require('express');
//引入用户路由器
const userRouter=require('./router/user.js');
//引入商品路由器
const productRouter=require('./router/product.js');
//console.log(userRouter);
//引入第三方模块
const bodyParser=require('body-parser');
//创建web服务器
const app=express();
//设置端口
app.listen(80);
//托管静态资源到public目录
app.use(express.static('./public'));
//
app.use(bodyParser.urlencoded({
	extended:false
}));


//挂载,添加前缀
app.use('/user',userRouter);  
app.use('/product',productRouter);
