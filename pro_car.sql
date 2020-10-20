#设置客户端连接服务器端的编码为UTF-8
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS car;
#创建新的数据库,设置存储编码为UTF-8
CREATE DATABASE car CHARSET=UTF8;
#进入该数据库
USE car;
#创建保存数据的表
CREATE TABLE pro_car(
lid INT PRIMARY KEY AUTO_INCREMENT,#主键约束编号
jeep_id INT,#所属型号家族编号
title VARCHAR(128),#主标题
subtitle VARCHAR(128),#副标题
price DECIMAL(10.2),#价格
promise VARCHAR(64),#服务承诺
sec VARCHAR(64),#规格/颜色

lname VARCHAR(32),#商品名称
category VARCHAR(32),#所属分类
details VARCHAR(5024),#产品详细说明

shelf_time BIGINT,#上架时间
sold_count INT,#已售出的数量
is_onsale BOOLEAN   #是否促销中
);
#插入数据
INSERT INTO pro_car VALUES(NULL,1,'牧马人','牧马人新能源','暂无报价','3年不限里程','黑色','JEEP牧马人','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,2,'自由光','自由光。。。。。。。。。。。。','288800.00','3年不限里程','白色','JEEP自由光','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,2,'大切诺基','切诺基。。。。。。。。。。。。','818000.00','1年不限里程','蓝色','JEEP大切诺基','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,2,'自由侠','自由侠。。。。。。。。。。。。','326800.00','2年不限里程','灰色','JEEP自由侠','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,1,'牧马人','牧马人新能源','暂无报价','3年不限里程','黑色','JEEP牧马人','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,2,'自由光','自由光。。。。。。。。。。。。','288800.00','3年不限里程','白色','JEEP自由光','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,2,'大切诺基','切诺基。。。。。。。。。。。。','818000.00','1年不限里程','蓝色','JEEP大切诺基','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,2,'自由侠','自由侠。。。。。。。。。。。。','326800.00','2年不限里程','灰色','JEEP自由侠','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,1,'牧马人','牧马人新能源','暂无报价','3年不限里程','黑色','JEEP牧马人','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,2,'自由光','自由光。。。。。。。。。。。。','288800.00','3年不限里程','白色','JEEP自由光','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,2,'大切诺基','切诺基。。。。。。。。。。。。','818000.00','1年不限里程','蓝色','JEEP大切诺基','越野','.......','xx-xx-xx',0,false);
INSERT INTO pro_car VALUES(NULL,2,'自由侠','自由侠。。。。。。。。。。。。','326800.00','2年不限里程','灰色','JEEP自由侠','越野','.......','xx-xx-xx',0,false);


