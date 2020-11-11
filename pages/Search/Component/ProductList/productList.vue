<template>
	<view>
		<view class="actionBox">
			<view>综合</view>
			<view>销量</view>
			<view>价格</view>
		</view>
		<view class="productListBox">
			<Product v-for="item in goods" :key="item.goods.id"></Product>
		</view>
	</view>
</template>

<script>
	import Product from "../Product/product.vue";
	import {
		mapState
	} from 'vuex';
	export default {
		components: {
			Product
		},
		data() {
			return {
			}
		},
		computed: mapState({
			goods: (state) => state.search.goods
		}),
		mounted() {
		}
	}
</script>

<style lang="scss">
	.actionBox {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 20rpx 10rpx;
		border-bottom: 1px solid rgba($color: #999, $alpha: 0.2);
	}
</style>
