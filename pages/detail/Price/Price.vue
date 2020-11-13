<template>
	<view class="infoBox">
		<view class="priceTitle">￥{{info.goods_price}}</view>
		<div class="titleBox">
			<view class="left">{{info.goods_name}}</view>
			<view class="iconfont right icon-xingxing">
				<text>收藏</text>
			</view>
		</div>
		<view class="kd">
			快递: 免运费
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
	}
</script>

<style lang="scss">
	.infoBox {
		background-color: #ffffff;
		.priceTitle {
			color: $uni-color-error;
			font-size: 55rpx;
			font-weight: 500;
			padding: 10rpx 0;
		}
		.kd{
			padding: 15rpx 0 25rpx 15rpx;
			color: #999;
		}
		.titleBox {
			padding: 10rpx;
			.left {
				flex: 5;
				padding-right: 20rpx;
			}
			.right {
				flex: 1;
				border-left: 1rpx solid #dcdcdd;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 40rpx;

				text {
					color: #999999;
					font-size: 26rpx;
				}
			}
			display: flex;
			justify-content: space-between;
		}
	}
</style>
