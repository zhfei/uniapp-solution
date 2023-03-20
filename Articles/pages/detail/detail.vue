<template>
	<view class="detail">
		<view v-if="loadState">
			<view class="title">{{detail.title}}</view>
			<view class="info">
				<text>{{detail.author}}</text>
				<uni-dateformat format="yyyy年MM月dd日 hh:mm:ss" :date="detail.posttime"></uni-dateformat>
			</view>
			<view class="content">
				{{detail.content}}
			</view>
			<view v-if="detail.imageUrls && detail.imageUrls.length" class="images">
				<image v-for="item in detail.imageUrls" :src="item" mode="widthFix" ></image>
			</view>
			<view class="btnGroup">
				<button size="mini" @click="goEdit">修改</button>
				<button size="mini" type="warn">删除</button>
			</view>
		</view>
		<view v-else>
			<uni-load-more status="loading"></uni-load-more>
		</view>
	</view>
</template>

<script>
	let id;
	export default {
		data() {
			return {
				detail:{},
				loadState: false
			}
		},
		onLoad(e) {
			console.log(e)
			id = e.id
		},
		onShow() {
			this.getDetail()
		},
		methods: {
			getDetail() {
				uniCloud.callFunction({
					name:'get_article_one',
					data:{
						id
					}
				}).then(res => {
					console.log(res)
					this.detail = res.result.data[0]
					this.loadState = true
				})
			},
			goEdit () {
				uni.navigateTo({
					url:'/pages/edit/edit?id='+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.detail {
	padding: 10px;
	.title {
		font-size: 50rpx;
		color: black;
		font-weight: 600;
		// text-align: left（左对齐）; justify（两端对齐）;
		text-align: justify;
		
	}
	.info {
		font-size: 30rpx;
		color: gray;
		padding: 10px 0;
		text {
			margin-right: 10px;
		}
	}
	.content {
		line-height: 1.5em;
		align-items: 2em;
		font-size: 40rpx;
		color: dimgray;
	}
	.images {
		padding-top: 50rpx;
		image {
			width: 100%;
		}
	}
	.btnGroup {
		padding: 20rpx 0;
		button {
			margin-right: 20rpx;
		}
	}
}
</style>
