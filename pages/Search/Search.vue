<template>
	<view class="searchBox">
		<SearchInput :keyword="keyword" class="input"></SearchInput>
		<HistorySearch v-if="!isNull"></HistorySearch>
		<ProductList v-else></ProductList>
	</view>
</template>

<script>
	import SearchInput from "./Component/SearchInput/SearchInput.vue";
	import HistorySearch from "./Component/HistorySearch/HistorySearch.vue";
	import ProductList from "./Component/ProductList/productList.vue";
	export default {
		components: {
			SearchInput,
			HistorySearch,
			ProductList
		},	
		props: {
			keyword: String
		},
		data() {
			return {

			};
		},
		computed:{
			isNull(){
				return this.$store.state.search.isNull;
			}
		},
		methods:{
			async searchGoods() {
				let [error, res] = await uni.request({
					url: "https://uinav.com/api/public/v1/goods/search",
				})
				this.$store.commit("search/changeGoods", res.message.goods)
			},
		},
		onLoad() {
		}	
	}
</script>

<style lang="scss">

</style>
