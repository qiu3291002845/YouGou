<template>
	<view class="container">
		<view class="title">
			<text>
				我的订单
			</text>
		</view>
		<view class="content">
			<view class="item" v-for="item in list" :key="index">
				<view class="icon iconfont" :class="item.icon"></view>
				<view class="title">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: "待付款",
						icon: "icon-qianbao"
					},
					{
						title: "待收货",
						icon: "icon-gouwuche"
					},
					{
						title: "退款/退货",
						icon: "icon-tuikuan"
					},
					{
						title: "全部订单",
						icon: "icon-dingdan"
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.content {
			.item {
				padding: 25rpx;
				.icon {
					color: #ff2d4a;
					font-size: 60rpx;
					margin-bottom: 15rpx;
				}
				.title{
					font-size: 28rpx;
				}
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				flex: 1;
			}

			display: flex;
			justify-content: center;
			align-items: center;
		}

		.title {
			font-size: 36rpx;

			text {
				margin: 25rpx;
				display: inline-block;
			}

			border-bottom: 1rpx solid #dfdfdf;
		}

		margin: 0 15rpx;
		background: white;
	}
</style>
