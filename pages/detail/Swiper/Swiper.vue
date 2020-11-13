<template>
	<view class="container">
		<swiper class="swiperBox" autoplay indicator-dots indicator-active-color="white" indicator-color="rgba(255,255,255,0.5)">
			<swiper-item v-for="item in info.pics" :key="index">
				<image :src="item.pics_big_url" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		computed: mapState({
			info: (state) => state.detail.info
		}),
	}
</script>

<style lang="scss">
	.container{
		height: 750rpx;
	}
	.swiperBox{
		height: 750rpx;
	}
</style>
