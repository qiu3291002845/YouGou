<template>
	<div class="searchBox">
		<input type="text" v-model="keyword" placeholder="搜索" @confirm="toSearch">
	</div>
</template>

<script>
	export default {
		data() {
			return {
				keyword: ""
			}
		},
		methods: {
			toSearch() {
				if (this.keyword !== "") {
					uni.navigateTo({
						url: `/pages/Search/Search?keyword=${this.keyword}`,
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.searchBox {
		background: #ff2d4a;
		height: 75rpx;
		width: 750rpx;
		padding: 20rpx 0;
					text-align: center;

		input {
			width: 95%;
			margin: 0 auto;
			height: 100%;
			background: #fff;
			border-radius: 10rpx;
			-webkit-border-radius: 10rpx;
			-moz-border-radius: 10rpx;
			-ms-border-radius: 10rpx;
			-o-border-radius: 10rpx;

			&::placeholder {}
		}
	}
</style>
