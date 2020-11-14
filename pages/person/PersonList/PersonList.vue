<template>
	<view class="container">
		<view class="item" v-for="item in list" :key="index">
			<view class="val">
				{{item.val}}
			</view>
			<view class="key">
				{{item.key}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						key: "收藏的店铺",
						val: 0
					},
					{
						key: "收藏的商品",
						val: 0
					},
					{
						key: "关注的商品",
						val: 0
					}, {
						key: "我的足迹",
						val: 0
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.container {
		margin: 0 15rpx;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 35rpx 15rpx;
		transform: translateY(-30rpx);
		.item{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0 15rpx;
			color: #686868;
			.key{
				font-size: 28rpx;
			}
		}
	}
</style>
