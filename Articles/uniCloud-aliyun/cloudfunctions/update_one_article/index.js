'use strict';

const db = uniCloud.database()

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let {detail} = event
	
	let res = await db.collection('Article').doc(detail._id).update({
		title:detail.title,
		author: detail.author,
		content: detail.content
	})
	
	//返回数据给客户端
	return res
};
