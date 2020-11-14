<template>
	<view>
		<Address></Address>
		<div class="border">
			<image src="../../static/card_border.png" mode=""></image>
		</div>
		<view class="orderBox" v-if="!isNull">
			<Order ref="order" :item="item" :sIndex="index" v-for="(item,index) in orderList" :key="item.goods_id"></Order>
		</view>
		<view class="isNull" v-else>购物车为空</view>
		<Total></Total>

	</view>
</template>

<script>
	import Address from "./address/Address.vue";
	import Order from "./order/Order.vue";
	import Total from "./Total/Total.vue"
	import {
		mapState
	} from "vuex"
	export default {
		components: {
			Address,
			Order,
			Total
		},
		computed: mapState({
			orderList: state => state.cart.orderList,
			goodsList: state => state.cart.goodsList,
			isSelectedAll: state => state.cart.isSelectedAll,
			isSelectAll: state => state.cart.isSelectAll,
			isNull: state => state.cart.isNull
		}),
		methods: {
			async findOrder() {
				wx.showLoading({
					title: "加载中"
				})
				await this.$store.dispatch("cart/findOrder", wx.getStorageSync("goodsList"));
				wx.hideLoading()
				if (this.orderList) {
					this.$store.commit("cart/totalIndex", this.orderList.length);
					this.$store.commit("cart/toggleIsNull", false)
				}
			},
		},
		async onShow() {
			await this.findOrder();
			this.$store.commit("cart/toggleAll", this.isSelectedAll.map(item => 0))
			this.$store.commit("cart/changeAll", false)
			this.$store.commit("cart/changeTotal", 0);
		},
		created() {
			this.findOrder()
		},
	}
</script>

<style lang="scss">
	.border {
		width: 750rpx;
		height: 20rpx;
		margin: 3rpx 0;
	}
	.isNull{
		margin: 50rpx auto;
		width: 750rpx;
		font-size: 40rpx;
		text-align: center;
	}
	.orderBox {
		margin-bottom: 100rpx;
	}
</style>
