const express=require('express');
//引入路由器对象
const r=express.Router();
//引入连接池模块
const pool=require('../pool.js');
//添加路由
//1.1用户注册
r.post("/v1/reg",(req,res)=>{
	var obj=req.body;
	//执行sql语句
	var sql="insert into car_user set ?";
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		res.send("1");
	});
});
//1.2用户登录
r.get("/v1/login/:uname&:upwd",(req,res)=>{
	var _uname=req.params.uname;
	var _upwd=req.params.upwd;
	//sql
	pool.query("SELECT * FROM car_user WHERE uname=? AND upwd=?",[_uname,_upwd],(err,result)=>{
		if (err) throw err;
		if (result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//导出路由器模块
module.exports=r;