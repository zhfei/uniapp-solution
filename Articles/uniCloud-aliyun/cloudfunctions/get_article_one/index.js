'use strict';

const db = uniCloud.database()

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let {id} = event
	console.log(id)
	let res = await db.collection('Article').doc(id).get()
	
	//返回数据给客户端
	return res
};
