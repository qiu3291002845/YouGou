<template>
	<view class="classifyBox">
		<view class="item" v-for="item in list" :key="item.goods_id">
			<image :src="item.image_src"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		created() {
			uni.request({
				url: "https://www.uinav.com/api/public/v1/home/catitems",
				success: (res) => {
					this.list = res.data.message;
				},
			});
		}
	}
</script>

<style lang="scss">
	.classifyBox {
		display: flex;
		height: 174rpx;		
		padding-top: 30rpx;
		.item {
			flex: 1;
			text-align: center;
			image {
				width: 140rpx;
				height: 128rpx;
			}
		}
	}
</style>
