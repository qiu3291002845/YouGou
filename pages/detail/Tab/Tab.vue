<template>
	<view class="tabBox">
		<view class="item picText" @click="toggleTab" :class="{'active':isTab == true }">
			<text>图文介绍</text>
		</view>
		<view class="item specArg" @click="toggleTab" :class="{'active':isTab == false }">
			<text>规格参数</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	}
	from "vuex"
	export default {
		computed:mapState({
			isTab: state => state.detail.isTab
		}),
		methods:{
			toggleTab(){
				this.$store.commit("detail/toggleTab");
			}
		}
	}
</script>

<style lang="scss">
	.tabBox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		background-color: #FFFFFF;
		margin-top: 15rpx;
		.item {
			flex: 1;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #333333;
			box-sizing: border-box;

			&.active {
				border-bottom: 10rpx #ff2745 solid;
				color: #ff2745;
			}
		}
	}
</style>
