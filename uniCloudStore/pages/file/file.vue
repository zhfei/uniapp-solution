<template>
	<view>
		<view class="container">
			<view class="box" v-for="(item,index) in imageUrls" :key="index">
				<image :src="item" mode="aspectFit" @click="previewImage(index)"></image>
				<view class="close" @click="colseImage(index)">X</view>
			</view>
			<view class="box add" @click="addImage" v-show="imageUrls.length < maxCount">+</view>
		</view>
		<button @click="upload(0)">上传</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageUrls: [],
				maxCount: 9,
				networkPics: []
			}
		},
		methods: {
			addImage() {
				uni.chooseImage({
					count:this.maxCount,
					success:(res) => {
						console.log(res)
						this.imageUrls = [...this.imageUrls, ...res.tempFilePaths]
						if (this.imageUrls.length > this.maxCount) {
							// splice删除数组中的部分，对源数组进行修改
							this.imageUrls.splice(this.maxCount)
						}
					}
				})
			},
			colseImage (e) {
				console.log(e)
				this.imageUrls.splice(e,1)
			},
			previewImage (e) {
				uni.previewImage({
					urls:this.imageUrls,
					current:e
				})
			},
			upload(e) {
				// let urlstr = this.imageUrls[e]
				// let urlList = urlstr.split('.')
				// let imageType = urlList[1]
				// uniCloud.uploadFile({
				// 	cloudPath:'自定义上传'+Date.now()+'.'+imageType,
				// 	filePath:this.imageUrls[e],
				// 	success(res) {
				// 		console.log(res)
				// 	}
				// })
				
				// 获取每个网络请求的Promise数组
			    let uploadArr =	this.imageUrls.map(async item => {
					return await this.uploadFunc(item)
				})
				// 监听所有的上传都完成，即：uploadArr有值时
				Promise.all(uploadArr).then(res => {
					let fileIDs = res.map(item => {
						return item.fileID
					})
					
					this.networkPics = fileIDs
					console.log(fileIDs)
				})
			},
			// 解决批量图片上传问题：返回每个上传请求的Promise
			uploadFunc(urlstr) {
				let urlList = urlstr.split('.')
				let imageType = urlList[1]
			    return uniCloud.uploadFile({
					cloudPath:'自定义上传'+Date.now()+'.'+imageType,
					filePath:urlstr
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	// 超过一行换行显示
	flex-wrap: wrap;
	.box {
		// [自己]样式设置
		width: 190rpx;
		height: 190rpx;
		background-color: lightgray;
		margin: 1rpx;

		// [自己]文档流方式（默认相对，绝对：会脱离文档流独立定位）
		position: relative;

		// [孩子]布局方式设置
		display: flex;
		align-items: center;
		justify-content: center;
		.close {
			// [自己]样式设置
			width: 40rpx;
			height: 40rpx;
			background-color: lightblue;

			// [自己]文档流方式（默认相对，绝对：会脱离文档流独立定位）
			position: absolute;
			top: 0;
			right: 0;

			// [孩子]布局方式设置
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
		// 显示图片内容不能超过父容器边界
		image {
			max-width: 100%;
			max-height: 100%;
		}
		
	}
	.add {
		font-size: 50rpx;
		color: white;
		border-radius: 10rpx;
	}
}

</style>
