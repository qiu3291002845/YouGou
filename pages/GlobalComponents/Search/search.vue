<template>
	<div class="searchBox">
		<input type="text" v-model="keyword" placeholder="搜索" @confirm="toSearch" >
	</div>
</template>

<script>
	export default {
		data() {
			return {
				keyword:""
			}
		},
		methods: {
			toSearch() {
				console.log(this.keyword)
				uni.navigateTo({
					url:`/pages/Search/Search?keyword=${this.keyword}`,
				})
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

		input {
			display: flex;
			align-items: center;
			text-align: center;
			justify-content: center;
			width: 90%;
			margin: 0 auto;
			text-align: center;
			height: 100%;
			background: #fff;
			border-radius: 10rpx;
			-webkit-border-radius: 10rpx;
			-moz-border-radius: 10rpx;
			-ms-border-radius: 10rpx;
			-o-border-radius: 10rpx;
			&::placeholder {
			}
		}
	}
</style>
