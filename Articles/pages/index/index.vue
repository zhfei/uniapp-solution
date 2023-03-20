<template>
	<view class="content">
		
		<view @click="goDetail(item._id)" class="cell" v-for="item in articles" :key="item._id">
			<view class="left">
				<view class="title">
					{{item.title}}
				</view>
				<view class="subTitle">
					<text>{{item.author}}</text>
					<uni-dateformat :date="item.posttime" format="MM-dd" threshold="[60000, 3600000]"></uni-dateformat>
				</view>
			</view>
			
			<image v-if="item.imageUrls && item.imageUrls.length" class="right" :src="item.imageUrls[0]" mode="aspectFit"></image>
			<image v-else class="right" src="../../static/jiazaishibai.png" mode="aspectFit"></image>
		</view>
		<view class="add" @click="goAdd">
			<uni-icons type="plusempty" size="20" color="#fff"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articles: []
			}
		},
		onPullDownRefresh() {
			this.articles = []
			this.getAticles()
		},
		onReachBottom() {
			this.getAticles()
		},
		onShow() {
			this.getAticles()
		},
		methods: {
			getAticles() {
				uniCloud.callFunction({
					name:'get_articles',
					data:{
						skip:this.articles.length
					}
				}).then(res => {
					console.log(res)
					this.articles = [...this.articles, ...res.result.data]
					uni.stopPullDownRefresh()
				})
			},
			goAdd() {
				uni.navigateTo({
					url:'/pages/add/add'
				})
			},
			goDetail(v) {
				console.log(v)
				uni.navigateTo({
					url:'/pages/detail/detail?id='+v
				})
			}
 		}
	}
</script>

<style lang="scss">
.cell {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1rpx solid blue;
	.left {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 20rpx;
		.title {
			font-size: 40rpx;
			font-weight: 700;
			// 文本超出2行，超出部分省略
			word-break: break-all;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2; /* 这里是超出几行省略 */
			overflow: hidden;
		}
		.subTitle {
			font-size: 30rpx;
			color: lightgray;
			text {
				display: inline-block;
				margin: 0 10rpx;
			}
		}
	}
	.right {
		width: 300rpx;
		height: 260rpx;
		margin: 20rpx;
	}
}
.add {
	width: 100rpx;
	height: 100rpx;
	background-color: darkgreen;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50rpx;
	position: fixed;
	right: 100rpx;
	bottom: 100rpx;
	box-shadow: 0 0 15rpx 10rpx rgba(30, 150, 200, 0.5);
	
}
</style>
