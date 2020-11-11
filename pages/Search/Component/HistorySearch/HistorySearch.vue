<template>
	<view class="container">
		<view class="title">
			<text>历史搜索</text>
			<text class="iconfont icon-error"></text>
		</view>
		<view class="list">
			<view v-for="item in list" :key="index">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ["小米", "小米智能电视", "小米空气净化器", "西门子洗碗机", "华为手机", "苹果", "锤子"]
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 15rpx;

		.title {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			text {
				font-size: 36rpx;
			}
		}

		.list {
			display: inline-flex;
			flex-wrap: wrap;

			view {
				background-color: #dedede;
				padding: 15rpx 20rpx;
				margin-right:25rpx ;
				margin-top: 25rpx;
			}
		}
	}
</style>
