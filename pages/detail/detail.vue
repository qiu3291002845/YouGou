<template>
	<view>
		<MSwiper></MSwiper>
		<MPrice></MPrice>
		<MSpec></MSpec>
		<MNav></MNav>
		<MAddress></MAddress>
		<MTab></MTab>
		<MContent></MContent>
	</view>
</template>

<script>
	import MSwiper from "./Swiper/Swiper.vue"
	import MPrice from "./Price/Price.vue"
	import MNav from "./Nav/Nav.vue"
	import MSpec from "./Spec/Spec.vue"
	import MAddress from "./Address/Address.vue"
	import MTab from "./Tab/Tab.vue"
	import MContent from "./Content/Content.vue"	
	export default {
		components: {
			MSwiper,
			MPrice,
			MNav,
			MSpec,
			MAddress,
			MTab,
			MContent
		},
		props: {
			id: Number
		},
		methods: {
			async findGood() {
				await this.$store.dispatch("detail/findGood", this.id);
			},
		},
		created() {
			this.findGood()
		}
	}
</script>

<style lang="scss">
	page {
		background: #f5f5f5;
	}
</style>
