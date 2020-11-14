<template>
	<view class="container">
		<view class="box address">
			<text>收货地址管理</text>
			<text class="iconfont icon-you"></text>
		</view>
		<view class="listBox">
			<view class="box">
				<text>联系客服</text>
				<text>520-521-1314</text>
			</view>
			<view class="box">
				<text>意见反馈</text>
				<text class="iconfont icon-you"></text>
			</view>
			<view class="box">
				<text>关于我们</text>
				<text class="iconfont icon-you"></text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.container {
		.listBox{
			margin: 15rpx 0;
			.box{
				border-bottom: 1rpx solid #FDFDFE;
			}
		}
		.box {
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx 15rpx;
		}

		margin: 15rpx;
	}
</style>
