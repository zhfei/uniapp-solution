<template>
	<view class="content">
		<view v-for="(item,index) in list" :key="index">
			<image class="logo" src="/static/logo.png"></image>
			<text class="title">{{item}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			uniCloud.callFunction({
				name:'myCloudFunc',
				data:{
					num: 5
				}
			}).then((res)=>{
				console.log(res)
				this.list = res.result
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
