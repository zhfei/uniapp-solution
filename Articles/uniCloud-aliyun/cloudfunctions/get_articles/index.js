'use strict';

const db = uniCloud.database()

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	let {skip=0} = event
	
	const res = await db.collection('Article').limit(5).skip(skip).get()
	
	//返回数据给客户端
	return res
};
