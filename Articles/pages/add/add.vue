<template>
	<view class="add">
		<form action="submit">
			<view class="item">
				<input type="text" name='title' placeholder="请输入标题"></input>
			</view>
			<view class="item">
				<input type="text" name='author' placeholder="请输入作者"></input>
			</view>
			<view class="item">
				<textarea type="text" name='content' placeholder="请输入详细内容"></textarea>
			</view>
			<view class="item">
				<button>提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.add {
	.item {
		padding: 20rpx;
		input, textarea {
			border: 1rpx solid #eee;
			height: 20px;
			border-radius: 5px;
			padding: 10rpx;
		}
		textarea {
			height: 80px;
			box-sizing: border-box;
		}
	}
}
</style>
