<template>
	<view>
		生命周期
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
