<template>
	<view class="detail">
		<view class="title">标题</view>
		<view class="info">
			<text>张三</text>
			<text>2023年 3月15日 星期三 21时30分44秒</text>
		</view>
		<view class="content">
			新闻内容
		</view>
		<view class="btnGroup">
			<button size="mini">修改</button>
			<button size="mini" type="warn">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
