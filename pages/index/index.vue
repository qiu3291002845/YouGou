<template>
	<view>
		<MSearch></MSearch>
		<MSwiper></MSwiper>
		<MClassify></MClassify>
		<MFoolData :item="item" :ToIndex="index" v-for="(item,index) in foolList" :key="index"></MFoolData>
	</view>
</template>

<script>
	import MSearch from "../GlobalComponents/Search/search.vue";
	import MClassify from "./component/Classify/classify.vue";
	import MSwiper from "./component/Swiper/swiper.vue";
	import MFoolData from "./component/FoolData/foolData.vue";
	export default {		
		components: {
			MSearch,
			MClassify,
			MFoolData,
			MSwiper
		},
		data() {
			return {
				foolList: []
			}
		},
		onLoad() {
			uni.request({
				url: "https://www.uinav.com/api/public/v1/home/floordata",
				success: (res) => {
					this.foolList = res.data.message
				}
			});
		},
		methods: {

		}
	}
</script>

<style>

</style>
