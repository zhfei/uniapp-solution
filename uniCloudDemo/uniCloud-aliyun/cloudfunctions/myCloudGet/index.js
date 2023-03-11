'use strict';

const db = uniCloud.database()

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
	let res = await db.collection('User').orderBy('age','desc').get()
	
	
	//返回数据给客户端
	return res
};
