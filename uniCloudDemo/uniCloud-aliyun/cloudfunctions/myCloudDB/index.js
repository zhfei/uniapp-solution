'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	// const collection = await db.collection('User').get()
	
	// const collection = await db.collection('User').count()
	
	// const collection = await db.collection('User').add({
	// 	name:'lilei'
	// })
	
	// const collection = await db.collection('User').add([
	// 	{
	// 		name:'Tom',
	// 		age: 12,
	// 		address: '山东'
	// 	},
	// 	{
	// 		name:'寒梅',
	// 		phone:'12166778890'
	// 	}
	// ])
	
	let {name,phone} = event
	console.log('name:',name)
	console.log('phone:',phone)
	const collection = await db.collection('User').add({
		name,
		phone
	})
		
	//返回数据给客户端
	return collection
};
