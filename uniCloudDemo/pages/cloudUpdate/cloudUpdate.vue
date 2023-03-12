<template>
	<view>
		<button @click="updateDB">点击更新云数据库</button>
		<button @click="removeDB">点击删除云数据库</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			updateDB() {
				uniCloud.callFunction({
					name:'myCloudUpdate',
					success: (res) => {
						console.log(res)
					}
				})
			},
			removeDB() {
				uniCloud.callFunction({
					name:'myCloudRemove'
				}).then(res => {
					console.log(res)
				})
			}
		} 
	}
</script>

<style>

</style>
