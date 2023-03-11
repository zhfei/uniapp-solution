'use strict';

const db = uniCloud.database()
const dbCmd = db.command

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	// doc： 根据id查询
	// let res = await db.collection('User').doc('640b5a9228064a03b7aa1ac7').get()
	// 限制条数
	// let res = await db.collection('User').limit(5).get()
	// // skip：跳过的条数，分页的话数字是页数*每页条数
	// let res = await db.collection('User').limit(5).skip(5).get()
	
	// field:只返回声明的字段，_id默认返回
	// let res = await db.collection('User').field({name: true}).get()
	// orderBy: 排序字段+升序/降序类型
	// let res = await db.collection('User').orderBy('age','desc').get()
	
	/*
		1.简单的值等于查询，如name: 'Tom' 
		2.逻辑指令单条件查询，如age: dbCmd.gt(15)
		3.逻辑指令多条件查询，如dbCmd.or(dbCmd.lt(15), dbCmd.gt(20))
		4.正则匹配
		使用//简单正则匹配，中间写要匹配的内容，如/^梅/ig（i忽略大小写，g全局）
		使用RegExp对象匹配，如new RegExp('梅','ig')
	*/
	let res = await db.collection('User').where({
		// age: dbCmd.gt(15)
		// age: dbCmd.or(dbCmd.lt(15), dbCmd.gt(20))
		// name: /梅/ig
	 	// name: new RegExp('梅','ig')
		}).get()
	
	//返回数据给客户端
	return res
};
