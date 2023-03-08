<template>
	<view>
		新闻列表
		<com-demo title="重大新闻" subtitle="重大新闻-西游记"></com-demo>
		<view @click="goLife">	进入生命周期页面 </view>
		<view @click="showAlert1">点击交互反馈toast</view>
		<view @click="showAlert2">点击交互反馈Modal弹窗</view>
		<view @click="showAlert3">点击交互反馈sheet弹窗</view>
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
					url:'/pages/life-circle/life-circle?wd=123&author=张三'
				})
			},
			showAlert1() {
				uni.showToast({
					icon:'loading',
					title:'加载中....',
					mask:true
				})
				
				setTimeout(()=>{
					uni.navigateTo({
						url:'/pages/center/center'
					})
				}, 1500);
			},
			showAlert2 () {
				uni.showModal({
					title:'手机号码验证',
					success(e) {
						if (e.confirm) {
							uni.navigateTo({
								url:'/pages/center/center'
							})
						} else {
							uni.showToast({
								icon:'none',
								title:'验证失败'
							})
						}
					}
				})
			},
			showAlert3 () {
				uni.showActionSheet({
					itemList:['A','B','C'],
					success(e) {
						console.log(e)
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
