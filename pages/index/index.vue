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
		<!-- swiper容器的高度要和里面item的高度设置一致，才能显示完整 -->
		<!-- image的展示需要设置2个地方，一是宽高，二是内容显示模式mode。 model类型包括：scaleToFill完全展示并拉伸，aspectFill展示最长边，aspectFit展示最短边 -->
		<swiper class="swip" autoplay interval="2000" circular indicator-dots>
			<swiper-item class="swipCell">
				<image src="@/static/images/good1.jpeg" mode="aspectFit"></image>
			</swiper-item>
			<swiper-item>
				<image src="@/static/images/good2.jpeg" mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image src="@/static/images/good3.jpeg" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		
		<!-- show-menu-by-longpress：识别图像内的二维码，发送朋友 -->
		<!-- image的展示需要设置2个地方，一是宽高，二是内容显示模式mode。 model类型包括：scaleToFill完全展示并拉伸，aspectFill展示最长边，aspectFit展示最短边 -->
		<!-- src路径设置可以设置网络地址或本地图片文件路径 -->
		<image src="../../static/images/good2.jpeg" mode="aspectFill" show-menu-by-longpress style="width: 750rpx;height: 300rpx;"></image>
	
		<!-- 视频自动播放：只有在静音的模式下才能自动播放，也就是说autoplay，muted要同时设置才行 -->
		<video src="https://vd2.bdstatic.com/mda-pc2htvp2093m9jgc/720p/h264/1677846896651600680/mda-pc2htvp2093m9jgc.mp4?v_from_s=bdapp-bdappcore-feed-suzhou" controls autoplay muted></video>
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
	margin-top: 20rpx;
	margin-bottom: 20rpx;
	
}
</style>
