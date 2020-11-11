<template>
	<view class="container">
		<view class="img">
			<image src="../../../../static/icon/icon_cart@3x.png" mode=""></image>
		</view>
		<view class="content">
			<div class="title">
				紫米ZMI 小米QC3.0快充车充双Usb只能输出 一拖二手机充电器牛逼
			</div>
			<div class="price">
				<text>￥</text><text class="big">69</text><text>.00</text>
			</div>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.container {
		display: flex;
		border-bottom: 1px solid rgba($color: #999, $alpha: 0.2);

		.img {
			flex: 1;
		}

		.content {
			margin-left: 20rpx;
			flex: 2;
			display: flex;
			flex-direction: column;
			padding: 30rpx 20rpx;

			.title {
				flex: 1;
				height: auto;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				margin-bottom: 100rpx;
				font-size: 30rpx;
				line-height: 40rpx;
				letter-spacing: 5rpx;
			}

			.price {
				flex: 1;
				color: #ff0000;

				.big {
					font-size: 50rpx;
				}
			}
		}
	}
</style>
