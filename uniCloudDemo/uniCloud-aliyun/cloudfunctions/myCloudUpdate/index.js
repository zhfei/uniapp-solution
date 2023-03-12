'use strict';

const { link } = require("fs");

const db = uniCloud.database()
const dbCmd = db.command

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	// 单条记录更新
	// const res = await db.collection('User').doc('640bf773e766bb2975957423').update({
	// 	phone: '88889999'
	// })
	
	// 多条记录更新
	// const res = await db.collection('User').where({
	// 	_id: dbCmd.in(['640bf773e766bb2975957423','640be1bc28064a03b7bd833f'])
	// }).update({
	// 	phone: '88889999000'
	// })
	
	// const res = await db.collection('User').where({
	// 	name: /梅/ig
	// }).update({
	// 	address: '冬梅大桥旁，33号'
	// })
	
	// 更新对象和数组
	// const res = await db.collection('User').where({
	// 	name: "张三"
	// }).update({
	// 	like:{
	// 		0: "游泳2"
	// 	},
	// 	bestFrient:{
	// 		name:"jack"
	// 	}
	// })
	
	
	// set: 覆盖一个对象， update:更新局部字段
	const res = await db.collection('User').where({
		name: "张三"
	}).update({
		// dbCmd.inc(1)：自增加一
		love: dbCmd.inc(1),
		// dbCmd.unshift(["写代码","打游戏"]): 数组头部添加数据
		like: dbCmd.unshift(["写代码","打游戏"]),
		// dbCmd.set({}) 更新一个对象，参数为传入的一个对象
		bestFrient: dbCmd.set({
			name: '狗剩',
			age: 12
		})
	})
	
	//返回数据给客户端
	return res
};
