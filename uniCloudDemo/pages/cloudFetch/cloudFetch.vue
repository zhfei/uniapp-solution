<template>
	<view>
		云查询
		<view v-for="(item,index) in list" :key="item._id">
			<view class="cell">
				<text space='emsp' decode>姓名：{{item.name}} </text>
				<text space='emsp' decode>年龄：{{item.age}} </text>
				<text space='emsp' decode>学校：{{item.address}} </text>
			</view>
			
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

<style lang="scss">
.cell {
	/*
		box-shadow: h-shadow v-shadow blur spread color inset;
	    X轴与Y轴设为正值（正值 X轴向右 Y轴向下）
		
		h-shadow：必需设置的值，定义水平阴影的位置。允许负值。
		v-shadow：必需设置的值，定义垂直阴影的位置。允许负值。
		blur：可选设置的值，定义模糊距离。
		spread：可选设置的值，定义阴影的尺寸。
		color ：可选设置的值，定义阴影的颜色。如果没有设置值，颜色值基于浏览器显示，建议设置。
		inset：可选设置的值，
	*/
	// box-shadow: 4px 4px 5px 3px red;

	/*
		text-shadow: h-shadow v-shadow blur spread color 
	
		X轴与Y轴设为正值（正值 X轴向右 Y轴向下）
		
		- 第一个属性值表示水平方向
		- 第二个属性值表示垂直方向
		- 第三个属性值表示模糊程度
		- 第四个属性值表示颜色
	*/
// 	text-shadow: 0 0 1px blue;

	/*
		border 属性是 border-width、border-style、border-color 三种属性的简写，
		使用 border 属性可以同时定义上述三个属性
	
		border-bottom：统一设置下边框的宽度、样式、颜色；
		border: 四个边框都设置
	*/
 	border-bottom: 1px solid #333;
}
</style>
