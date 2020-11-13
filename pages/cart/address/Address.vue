<template>
	<view class="container">
		<view class="shr">
			<text class="title">收货人: </text>
			<text class="name">陈子涵</text>
			<text class="phone">15100404109</text>
			<text class="you iconfont icon-you"></text>
		</view>
		<view class="shdz">
			<text class="title">收货地址: </text>
			<text class="name">河北省邯郸市丛台区</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.container {
		view {
			padding: 25rpx 15rpx;
			display: flex;
			align-items: center;
			.title{
				margin-right: 20rpx;
			}
			.name{
				flex: 3;
			}
			.phone{
				flex: 3;
			}
			.you{
				font-size: 40rpx;
			}
		}
	}
</style>
