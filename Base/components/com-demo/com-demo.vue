<template>
	<view class="box">
		<view class="title">{{title}}</view>
		<view class="subtitle">{{subtitle}}</view>
		<view class="line"></view>
	</view>
</template>

<script>
	export default {
		name:"com-demo",
		props: ['title', 'subtitle'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.box {
	width: 750rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: lightblue;
	.title {
		font-size: 40rpx;
		font-weight: 700;
		color: palevioletred;
	}
	.subtitle {
		font-size: 30rpx;
		font-weight: 500;
		color: pink;
	}
	.line {
		height: 10rpx;
		width: 50rpx;
		border-radius: 5;
		background-color: blue;
		margin-top: 10rpx;
	}
}
</style>