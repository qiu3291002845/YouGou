<template>
	<view>
		<Address></Address>
		<div class="border">
			<image src="../../static/card_border.png" mode=""></image>
		</div>
		<view class="orderBox">
			<Order ref="order" :item="item" :sIndex="index" v-for="(item,index) in orderList" :key="item.goods_id"></Order>
		</view>
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
			goodsList: state => state.cart.goodsList
		}),
		data() {
			return {
				// goodsList: []
			}
		},
		methods: {
			async findOrder() {
				wx.showLoading({
					title: "加载中"
				})
				await this.$store.dispatch("cart/findOrder", wx.getStorageSync("goodsList"));
				wx.hideLoading()
				if(this.orderList){
					this.$store.commit("cart/totalIndex", this.orderList.length)
				}
			},
			async handleClick() {
				console.log(this.$refs.order.toggleSelected())
			}
		},
		onShow() {
			this.findOrder()
		},
		created() {
			this.findOrder()
		}
	}
</script>

<style lang="scss">
	.border {
		width: 750rpx;
		height: 20rpx;
		margin: 3rpx 0;
	}

	.orderBox {
		margin-bottom: 100rpx;
	}
</style>
