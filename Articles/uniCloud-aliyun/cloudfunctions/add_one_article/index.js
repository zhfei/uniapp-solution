'use strict';

const db = uniCloud.database()

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const {detail} = event
	
	const res = await db.collection("Article").add({
		posttime: Date.now(),
		...detail
	})
	
	//返回数据给客户端
	return res
};
