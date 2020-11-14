<template>
	<view class="navBox">
		<view class="lxkf iconfont icon-lianxikefu">
			<text>
				联系客服
			</text>
		</view>
		<view class="cart iconfont icon-gouwuche" @click="toCart">
			<text>购物车</text>
		</view>
		<view class="joinCart" @click="joinCart">
			加入购物车
		</view>
		<view class="ljgm">
			立即购买
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		computed: mapState({
			info: (state) => state.detail.info
		}),
		methods: {
			toCart() {
				uni.switchTab({
					url: "/pages/cart/cart",
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			async joinCart() {
				await wx.setStorageSync("goodsList", [...wx.getStorageSync("goodsList"), this.info.goods_id]);
			}
		},
	}
</script>

<style lang="scss">
	.navBox {
		background-color: #ffffff;

		view {
			flex: 3;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 40rpx;

			text {
				font-size: 24rpx;
				color: #999;
			}

			&.joinCart {
				background-color: #ffb517;
				flex: 4;
				padding: 20rpx 0;
				color: white;
				font-size: 30rpx;
			}

			&.ljgm {
				background-color: #ff2d4a;
				padding: 20rpx 0;
				flex: 4;
				color: white;
				font-size: 30rpx;
			}
		}

		height: 100rpx;
		width: 750rpx;
		position: fixed;
		bottom: 0;
		display: flex;
		left: 0;
	}
</style>
