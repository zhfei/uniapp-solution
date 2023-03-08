<template>
	<view>
		新闻列表
		<com-demo title="重大新闻" subtitle="重大新闻-西游记"></com-demo>
		<view @click="goLife">	进入生命周期页面 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			goLife() {
				uni.reLaunch({
					url:'/pages/life-circle/life-circle'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
