<template>
	<swiper class="swiperBox" indicator-dots indicator-active-color="white" indicator-color="rgba(255,255,255,0.5)">
		<swiper-item v-for="item in list" :key="item.goods_id">
			<image mode="aspectFit" :src="item.image_src" alt="" srcset="" />
		</swiper-item>
	</swiper>
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
				url: "https://www.uinav.com/api/public/v1/home/swiperdata",
				success: (res) => {
					this.list = res.data.message
				}
			});
		}
	}
</script>

<style lang="scss">
	.swiperBox {
		width: 750rpx;
		height: 340rpx;
		image {
			width: 750rpx;
			height: 340rpx;
		}
	}
</style>
