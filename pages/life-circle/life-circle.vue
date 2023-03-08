<template>
	<view>
		生命周期
		<view @click="goBack">  返回上一级 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			goBack() {
				uni.navigateBack()
			}
		},
		created() {
			console.log('组件实例创建完成')
		},
		mounted() {
			console.log('组件实例挂载到Dom树上完成')
		}
	}
</script>

<style lang="scss">

</style>
