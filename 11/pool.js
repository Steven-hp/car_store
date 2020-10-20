/*这是连接池模块，要导出给路由器用*/
/*引用mysql模块*/
const mysql=require("mysql");

/* 创建连接池对象 */
const pool=mysql.createPool({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'',
	database:'car',
	connectionLinit:'20'
});

/* 导出连接池对象 */
module.exports=pool;















