<template>
	<view class="container">
		<view class="viewBox" @click="login">
			<view class="avatar">
				<image src="../../../static/avatar.jpg" mode=""></image>
			</view>
			<view class="login">
				<view>登录/注册</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			login() {
				uni.navigateTo({
					url:"/pages/Login/Login"
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background: #ff2d4a;
		height: 360rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.login {
			color: white;
			margin-top: 15rpx;
		}

		.avatar {
			width: 150rpx;
			height: 150rpx;
			margin: 0 auto;
			border-radius: 50%;
			border: 7.5rpx solid white;
			margin-bottom: 10rpx;

			image {
				border-radius: 50%;
			}
		}
	}
</style>
