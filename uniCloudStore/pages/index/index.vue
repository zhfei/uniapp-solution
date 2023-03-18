<template>
	<view class="content">
		<input type="text" v-model="title"/>
		<uni-file-picker 
			v-model="imageValue" 
			fileMediatype="image" 
			mode="grid" 
			:auto-upload="false"
			@select="select" 
			@progress="progress" 
			@success="success" 
			@fail="fail" 
			ref="files"
		/>
		<button @click="upload">开始上传</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageValue: [],
				imageUrls: [],
				title: ''
			}
		},
		onLoad() {

		},
		methods:{
			// 获取上传状态
			select(e){
				console.log('选择文件：',e)
			},
			// 获取上传进度
			progress(e){
				console.log('上传进度：',e)
			},
			
			// 上传成功
			success(e){
				console.log('上传成功',e)
				this.imageUrls = e.tempFilePaths
				
				uniCloud.callFunction({
					name:'add_pic_data_one',
					data:{
						title: this.title,
						imageUrls: this.imageUrls
					}
				}).then(res => {
					console.log(res)
				})
			},
			
			// 上传失败
			fail(e){
				console.log('上传失败：',e)
			},
			
			upload() {
				this.$refs.files.upload()
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
