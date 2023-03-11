<template>
	<view>
		云查询
		<view v-for="(item,index) in list" :key="item._id">
			<text space='emsp' decode>姓名：{{item.name}} </text>
			<text space='emsp' decode>年龄：{{item.age}} </text>
			<text space='emsp' decode>学校：{{item.address}} </text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onReady() {
			uniCloud.callFunction({
				name:'myCloudGet',
				success: (res) => {
					console.log(res)
					this.list = res.result.data
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
