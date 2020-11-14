<template>
	<view class="container">
		<view class="img">
			<image src="../../static/logo.png" mode="" />
		</view>
		<view class="content">
			<view class="title">
				申请获取以下权限
			</view>
			<view class="desc">
				获取你的公开信息(昵称,头像,地区等)
			</view>
			<button type="warn" @click="login" open-type="getUserInfo">授权登录</button>
		</view>
	</view>
</template>

<script>
	import {
		appid,
		secret
	} from "../../Tool/config.js"
	export default {
		data() {
			return {

			};
		},
		methods: {
			login() {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						if (loginRes.code) {
							// 获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: function(infoRes) {
									console.log(infoRes);
								}
							});
							uni.request({
								url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${loginRes.code}&grant_type=authorization_code`,
								success: res => {
									console.log(res)
								}
							})
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.content {
			border-top: 1px solid #dfdfdf;
			padding-top: 50rpx;

			.title {
				margin: 20rpx 0;
			}

			.desc {
				color: #999;
				margin: 20rpx 0;
			}

			button {
				margin-top: 50rpx;
			}
		}

		.img {
			width: 240rpx;
			height: 240rpx;
			margin: 100rpx auto;
		}

		padding: 30rpx;
	}
</style>
