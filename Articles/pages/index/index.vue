<template>
	<view class="content">
		<view class="cell" v-for="item in 5">
			<view class="left">
				<view class="title">
					我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本我是两行自动换的文本
				</view>
				<view class="subTitle">
					默认子标题
				</view>
			</view>
			<image class="right" src="../../static/jiazaishibai.png" mode="aspectFit"></image>
		</view>
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
		}
	}
	.right {
		width: 300rpx;
		height: 260rpx;
		margin: 20rpx;
	}
}
</style>
