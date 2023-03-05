<template>
	<view class="box">
		<text>uni-app<text class="row">零基础</text>入门</text>
		
		<view class="txt">
			<icon type="success"></icon>
			<icon type="warn"></icon>
			<!-- APP，小程序中文字上按选中 -->
			<text selectable>内置组件</text>
			<text user-select="true">可选组件</text>
		</view>
		
		<!-- scroll-view滚动视图 -->
		<scroll-view class="scroll" scroll-x scroll-y>
			<view class="group">
				<view class="cell">
					<text>123</text>
				</view>
				<view class="cell">
					<text>123</text>
				</view>
				<view class="cell">
					<text>123</text>
				</view>
				<view class="cell">
					<text>123</text>
				</view>
				<view class="cell">
					<text>123</text>
				</view>
			</view>
		</scroll-view>
		
		<swiper class="swip" autoplay interval="2000" circular indicator-dots>
			<swiper-item class="swipCell">
				<image src="@/static/images/good1.jpeg" mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image src="@/static/images/good2.jpeg" mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image src="@/static/images/good3.jpeg" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
.box {
	width: 750rpx;
	height: 200px;
	background-color: bisque;
	.row {
		font-style: initial
	}
}
.txt {
	text {
		display: block;
	}
}
.scroll {
	height: 200rpx;
	background-color: indianred;
	.group {
		// 子元素多时，不换行
		white-space: nowrap;
		.cell {
			width: 200rpx;
			height: 200rpx;
			background-color: blue;
			display: inline-block;
			margin-right: 20rpx;
		}
	}
}

.swip {
	width: 750rpx;
	height: 550rpx;
	background-color: pink;
	
}
</style>
