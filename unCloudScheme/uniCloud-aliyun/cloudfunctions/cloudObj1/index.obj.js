const db = uniCloud.database()
module.exports = {
	_before: function () { // 通用预处理器

	},
	async get(num) {
		return await db.collection('Article').limit(num).get()
	}
}
