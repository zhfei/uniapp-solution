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
		onLoad(v) {
			console.log('uni-app的组件加载生命周期方法，可以接收传参')
			console.log(v)
		},
		created() {
			console.log('组件实例创建完成')
			console.log(this.$route.query)
		},
		mounted() {
			console.log('组件实例挂载到Dom树上完成')
		}
	}
</script>

<style lang="scss">

</style>
