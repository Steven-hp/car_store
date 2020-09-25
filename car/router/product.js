//引入express框架
const express=require("express");
//引入路由器
const r=express.Router();
//引入连接池模块
const pool=require("../pool.js");
//商品路由
//1.1商品添加
r.put("/v1/add",(req,res)=>{
	var obj=req.body;
	pool.query("INSERT INTO car_laptop SET ?",[obj],(err,result)=>{
		if (err) throw err;
		res.send("1");
	});
});
//导出路由器模块
