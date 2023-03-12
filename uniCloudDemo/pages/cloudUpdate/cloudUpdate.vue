<template>
	<view>
		<button @click="updateDB">点击更新云数据库</button>
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
			}
		}
	}
</script>

<style>

</style>
