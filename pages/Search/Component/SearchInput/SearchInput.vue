<template>
	<view class="searchBox">
		<input class="input iconfont icon-search" v-model="searchKeyword" @confirm="searchProduct" type="text" placeholder="请输入你想要搜索的商品">
		<button type="default" @click="toBack">取消</button>
	</view>
</template>

<script>
	export default {
		props: {
			keyword: String
		},
		data() {
			return {
				searchKeyword: this.keyword,
			}
		},
		methods: {
			toBack() {
				// uni.navigateBack()
				this.searchKeyword = "";
				this.$store.commit("search/toggleIsNull", false)
			},
			async searchGoods() {
				uni.showLoading({
					title: '加载中'
				});
				let [error, res] = await uni.request({
					url: "https://uinav.com/api/public/v1/goods/search",
				})
				await uni.hideLoading();
				this.$store.commit("search/changeGoods", res.data.message.goods);
			},
			async searchProduct() {
				await this.searchGoods();
				await this.$store.commit("search/toggleIsNull", true);
			},

		},

	}
</script>

<style lang="scss">
	.searchBox {
		background-color: #efefef;
		padding: 25rpx;
		height: 75rpx;
		display: flex;

		.input {
			color: #686868;
			flex: 3;
			background-color: white;
			display: flex;
			padding-left: 10rpx;
			align-items: center;
			border-radius: 10rpx;
			margin-right: 25rpx;
			height: 75rpx;

			&::before {
				margin-right: 20rpx;
			}
		}

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 1;
		}
	}
</style>
