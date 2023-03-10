'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let {num} = event
	
	let arr = ['清风','明月','西巷','山峦','刍狗','务虚']
	
	arr = arr.slice(0,num)
	//返回数据给客户端
	return arr
};
