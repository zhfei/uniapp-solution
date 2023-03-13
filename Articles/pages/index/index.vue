<template>
	<view class="content">
		<view class="cell" v-for="item in 5">
			<view class="left">
				<view class="title">
					我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本
				</view>
				<view class="subTitle">
					<text>小明</text>
					<text>2023.2.2</text>
					<text>删除</text>
				</view>
			</view>
			<image class="right" src="../../static/jiazaishibai.png" mode="aspectFit"></image>
		</view>
		<view class="add" @click="goAdd">+</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			goAdd() {
				uni.navigateTo({
					url:'/pages/add/add'
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
			color: lightblue;
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
