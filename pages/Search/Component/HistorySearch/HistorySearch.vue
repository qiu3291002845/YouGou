<template>
	<view class="container">
		<view class="title">
			<text>历史搜索</text>
			<text class="iconfont icon-error"></text>
		</view>
		<view class="list">
			<button @click="resKeyword(item)" v-for="(item,index) in list" :key="index">
				{{item}}
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ["小米", "小米智能电视", "小米空气净化器", "西门子洗碗机", "华为手机", "苹果", "锤子"]
			}
		},
		methods: {
			resKeyword(i) {
				this.$emit("resKeyword",i);
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

			button {
				margin: 0;
				background-color: #dedede;
				padding: 10rpx 15rpx;
				margin-right: 25rpx;
				margin-top: 25rpx;
			}
		}
	}
</style>
