'use strict';

const db = uniCloud.database()
const dbCmd = db.command

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	// 全部删除
	const res = db.collection('User').where({
		_id: dbCmd.neq(-1)
	}).remove()
	
	//返回数据给客户端
	return res
};
