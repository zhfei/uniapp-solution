<template>
	<view class="box">
		<!-- :style动态绑定传的是对象 -->
		<view class="alert" :style="{height: state?'200rpx':'0rpx'}"></view>
		<button type="default" size="mini" @click="closeAlert">关闭</button>
		<button type="default" size="mini" @click.native="show">本地事件监听</button>

	</view>
</template>

<script>
	export default {
		name:"my-pop",
		props: ['state'],
		data() {
			return {
				
			};
		},
		methods: {
			closeAlert() {
				this.$emit('closeAlert', false)
			},
			show(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
.box {
	.alert {
		height: 200rpx;
		width: 200rpx;
		background-color: hotpink;
	}
}
</style>