<template>
	<view>
		关于
		<com-demo title="关于北极" subtitle="重大新闻-北极光"></com-demo>
		<button type="default" @click="openAlert">打开弹窗,当前状态{{state}}</button>
		<my-pop :state="state" @closeAlert="closeAlert()"></my-pop>
		<!-- sync:类似于表单中的v-model双向绑定，子组件和父组件的状态变化是同步更新变化的。 -->
		<!-- 子组件需要加一个update:进行声明使用this.$emit('update:state',false) -->
		<my-pop :state.sync="state"></my-pop>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state: true
			};
		},
		methods: {
			openAlert() {
				this.state = true
			},
			closeAlert(v) {
				this.state = v
			}
		}
	}
</script>

<style lang="scss">

</style>
