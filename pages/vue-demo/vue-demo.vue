<template>
	<view>
		根组件
		<com-demo>demo组件引入</com-demo>
	</view>
</template>

<script>
	import comDemo from "@/components/com-demo/com-demo.vue"
	
	export default {
		components: {
			comDemo
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
