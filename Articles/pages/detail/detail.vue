<template>
	<view class="detail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<text>{{detail.author}}</text>
			<uni-dateformat format="yyyy年MM月dd日 hh:mm:ss" :date="detail.posttime"></uni-dateformat>
		</view>
		<view class="content">
			{{detail.content}}
		</view>
		<view class="btnGroup">
			<button size="mini">修改</button>
			<button size="mini" type="warn">删除</button>
		</view>
	</view>
</template>

<script>
	let id;
	export default {
		data() {
			return {
				detail:{}
			}
		},
		onLoad(e) {
			console.log(e)
			id = e.id
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
	.btnGroup {
		padding: 20rpx 0;
		button {
			margin-right: 20rpx;
		}
	}
}
</style>
