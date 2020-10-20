/* 引入express包 */
const express=require("express");
/* 引入连接池模块 */
const pool=require('./pool.js');
/* 创建路由器对象 */
const r=express.Router();

/* 获取商品列表  get product/list  ?pno=1&pageSize=10 */
r.get("/list",(req,res)=>{
	let obj=parseInt(req.query);
	console.log(obj);
	if (!obj.pno){
		obj.pno=1;
	};
	if (!obj.pageSize){
		obj.pageSize=10;
	}
	var sql="SELECT * FROM car LIMIT ?,?";
	pool.query(sql,[(obj.pno-1),obj.pageSize],(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});


/* 查看商品详情  get  product/detail  ?lid=1 */
r.get('/detail',(req,res)=>{
	let obj=req.query;
	console.log(obj);
	if (!obj.lid){
		res.send({code:401,msg:'lid required'});
		return;
	};
	var sql="SELECT * FROM car WHERE lid=?";
	pool.query(sql,[obj.lid],(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send({code:200,msg:'detail suc'})
	})
})



/* 导出路由器对象 */
module.exports=r;





