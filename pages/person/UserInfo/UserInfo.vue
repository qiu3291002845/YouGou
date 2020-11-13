<template>
	<view class="container">
		<view class="viewBox"  @click="login">
			<view class="avatar">
				<image src="../../../static/avatar.jpg" mode=""></image>
			</view>
			<view class="login">
				<text>登录/注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			login(){
				uni.login({
					provider:"weixin",
					success:res=>{
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.container{
		background: #ff2d4a;
		height: 360rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.login{
			color: white;
		}
		.avatar{
			width: 150rpx;
			height: 150rpx;
			margin: 0 auto;
			border-radius: 50%;
			border: 7.5rpx solid white;
			margin-bottom: 10rpx;
			image{
				border-radius: 50%;
			}
		}
	}
</style>
