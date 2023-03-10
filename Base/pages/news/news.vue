<template>
	<view>
		新闻列表
		<com-demo title="重大新闻" subtitle="重大新闻-西游记"></com-demo>
		<view @click="goLife">	进入生命周期页面 </view>
		<view @click="showAlert1">点击交互反馈toast</view>
		<view @click="showAlert2">点击交互反馈Modal弹窗</view>
		<view @click="showAlert3">点击交互反馈sheet弹窗</view>
		<button type="default" size="mini" @click="showTabBar(1)">隐藏TabBar</button>
		<button type="default" size="mini" @click="showTabBar(2)">展示TabBar</button>
		<button type="default" size="mini" @click="showTabBar(3)">展示Brage</button>
		<button type="default" size="mini" @click="showTabBar(4)">隐藏Brage</button>
		<image :src="imageUrl" mode="widthFix" style="width: 100%" @click="getImageUrl"></image>
		<view class="">
			可爱猫
		</view>
		<view v-for="item in cats">
			<image :src="item.url" mode="widthFix" style="width: 100%" @click="getImageUrl"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: '/static/images/good1.jpeg',
				cats: []
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
			},
			showTabBar(state) {
				if (state === 1) {
					uni.hideTabBar()
				} else if (state === 2){
					uni.showTabBar()
				} else if (state === 3){
					uni.setTabBarBadge({
						index:2,
						text:'10'
					})
				} else if (state === 4){
					uni.removeTabBarBadge({
						index:2
					})
				}
			},
			getImageUrl() {
				uni.showLoading({
					title:'数据加载中...'
				})
				uni.request({
					url:'https://dog.ceo/api/breeds/image/random',
					success: (res) => {
						console.log(res)
						this.imageUrl = res.data.message
						uni.hideLoading()
					}
				})
				
				uni.request({
					url:'https://api.thecatapi.com/v1/images/search',
					data:{
					  limit:3
					},
					success: (res) => {
						console.log(res)
						this.cats = res.data
					}
				})
			}
		} 
	}
</script>

<style lang="scss">

</style>
