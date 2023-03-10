<template>
	<view>
		个人中心页面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady(v) {
			uni.setNavigationBarTitle({
				title:'中心广场'
			})
			uni.setNavigationBarColor({
				frontColor:'#000000'
			})
			uni.showNavigationBarLoading()
			
			setTimeout(()=>{
				uni.hideNavigationBarLoading()
			}, 1500)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
