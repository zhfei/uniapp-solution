<template>
	<view class="edit">
		<form @submit="goSubmit">
			<view class="item">
				<input v-model="detail.title" type="text" name='title' placeholder="请输入标题"></input>
			</view>
			<view class="item">
				<input v-model="detail.author" type="text" name='author' placeholder="请输入作者"></input>
			</view>
			<view class="item">
				<textarea v-model="detail.content" type="text" name='content' placeholder="请输入详细内容"></textarea>
			</view>
			<view class="item">
				<uni-file-picker
					v-model="imageValue" 
					fileMediatype="image" 
					mode="grid" 
					@success="uploadSuccess" 
				/>
			</view>
			<view class="item">
				<button form-type="submit" type="primary" :disabled="isDiable(detail)">提交</button>
				<button form-type="reset">重置</button>
			</view>
		</form>
	</view>
</template>

<script>
	let id;
	export default {
		data() {
			return {
				detail: {
					title: '',
					author: '',
					content: ''
				},
				imageValue: [],
				imageUrls: []
			}
		},
		onLoad(e) {
			id=e.id
			this.getDetail()
		},
		methods: {  
			isDiable(detail) {
				// for (let key in detail) {
				// 	// form表单中，有一个value是空，则返回true,即：表示不可用。
				// 	if (!detail[key]) {
				// 		return true
				// 	}
				// }
				console.log(detail)
				// 文章中的属性有一个为空，就返回true，不可用
				let res = Object.keys(detail).some((key, index) => {
					return detail[key] == ''
				})
				return res
			},
			getDetail() {
				uniCloud.callFunction({
					name:'get_article_one',
					data:{
						id
					}
				}).then(res=>{
					console.log(res)
					this.detail = res.result.data[0]
					
					let urls = this.detail.imageUrls.map(item=>{
						return {url:item}
					})
					this.imageValue = urls
				})
			},
			goSubmit(v) {
				console.log(this.imageValue)
				// 将新增和接口返回的合成
				let urls = this.imageValue.map(item => {
					return item.url
				})
				// this.detail中包含_id
				let detail = this.detail
				uniCloud.callFunction({
					name:"update_one_article",
					data:{
						detail,
						imageUrls: urls
					}
				}).then(res => {
					console.log(res)
					uni.showToast({
						title:"更新成功"
					})
					setTimeout(()=>{
						uni.navigateBack()
					}, 1000)
				})
			},
			uploadSuccess(e) {
				console.log(e)
				this.imageUrls = e.tempFilePaths
			}
 		}
	}
</script>

<style lang="scss" scoped>
.edit {
	.item {
		padding: 20rpx;
		input, textarea {
			border: 1rpx solid #eee;
			height: 40px;
			border-radius: 5px;
			padding: 10rpx;
			width: 710rpx;
			box-sizing: border-box;
		}
		textarea {
			height: 100px;
			
		}
		button {
			margin-top: 20px;
		}
	}
}
</style>