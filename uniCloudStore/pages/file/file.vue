<template>
	<view class="container">
		<view class="box" v-for="(item,index) in 5" :key="index">
			<image src="../../static/logo.png" mode="aspectFit"></image>
			<view class="close">X</view>
		</view>
		<view class="box add">
			+
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
		
	}
	.add {
		font-size: 50rpx;
		color: white;
		border-radius: 10rpx;
	}
}

</style>
