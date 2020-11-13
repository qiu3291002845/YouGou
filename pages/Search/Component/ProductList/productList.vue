<template>
	<view>
		<view class="actionBox">
			<view>综合</view>
			<view>销量</view>
			<view>价格</view>
		</view>
		<view class="productListBox" v-if="goods.length > 0">
			<Product :item="item" v-for="item in goods" :key="item.goods.id"></Product>
		</view>
		<view v-else class="productListBox noData">
			<text >找不到您要搜索的商品,请搜索其他商品</text>
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
		computed: mapState({
			goods: (state) => state.search.goods
		}),
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
	.noData{
		display: flex;
		justify-content: center;
		padding: 20rpx 10rpx;
	}
</style>
