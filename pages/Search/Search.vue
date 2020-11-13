<template>
	<view class="searchBox">
		<SearchInput ref="searchInput" :keyword="searchKeyword" class="input"></SearchInput>
		<HistorySearch @resKeyword="resKeyword" v-if="!isNull"></HistorySearch>
		<ProductList v-else></ProductList>
		<view @click="toTop" v-if="isNull && isShow" class="iconfont icon-cc-top fixedBtn">
		</view>
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
			ProductList,
		},
		props: {
			keyword: String
		},
		data() {
			return {
				isShow: false,
				searchKeyword: this.keyword
			};
		},
		computed: {
			isNull() {
				return this.$store.state.search.isNull;
			},
		},
		methods: {
			async findMore() {
				await this.$refs.searchInput.searchGoods()
			},
			toTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			async resKeyword(val) {
				this.$store.commit("search/changeGoods", []);
				await this.$refs.searchInput.searchGoods(val, 0)
				await this.$store.commit("search/toggleIsNull", true);
			}
		},
		async onLoad() {
			if (this.keyword) {
				this.$store.commit("search/changeGoods", []);
				await this.$refs.searchInput.searchGoods(this.keyword)
				await this.$store.commit("search/toggleIsNull", true);
			}
		},
		onPageScroll(res) {
			if (res.scrollTop > 2400) {
				this.isShow = true;
			} else {
				this.isShow = false;
			}
		},
		onReachBottom() {
			this.findMore()
		},
	}
</script>

<style lang="scss">
	.fixedBtn {
		background-color: #ff2d4a;
		border-radius: 50%;
		color: white;
		position: fixed;
		padding: 30rpx;
		font-size: 45rpx;
		display: flex;
		align-items: center;
		right: 5%;
		bottom: 5%;
	}
</style>
