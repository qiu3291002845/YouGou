<template>
	<view class="container">
		<view class="orderBox" v-if="!isNull">
			<Address></Address>
			<view class="border">
				<image src="../../static/card_border.png" mode=""></image>
			</view>
			<Order ref="order" :item="item" :sIndex="index" v-for="(item,index) in orderList" :key="item.goods_id"></Order>
			<Total></Total>
		</view>
		<view class="isNull" v-else>
			<view class="img">
				<image src="../../static/noCart.png" mode=""></image>
			</view>
			<text>你还没有添加任何商品</text>
		</view>
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
	page{
		background-color: #f5f5f5;
		padding: 100rpx auto;
	}
	.border {
		width: 750rpx;
		height: 20rpx;
		margin: 3rpx 0;
	}

	.isNull {
		margin: 0 auto;
		width: 750rpx;
		font-size: 28rpx;
		text-align: center;
		.img{
			width: 250rpx;
			height: 250rpx;
			margin: 0 auto;
		}
	}

	.orderBox {
		margin-bottom: 100rpx;
	}
</style>
