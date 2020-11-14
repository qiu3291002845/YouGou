<template>
	<view class="container">
		<view class="qx">
			<checkbox-group @change="toggleRadio">
				<label class="radio">
					<checkbox color="#eb4450" :value="isSelectAll" :checked="isSelectAll" /><text>全选</text>
				</label>
			</checkbox-group>
		</view>
		<view class="total">
			<view class="num">
				<text>合计: </text>
				<text class="priceBox">￥<text class="price">{{totalPrice}}</text>.00</text>
			</view>
			<view class="desc">
				包含运费
			</view>
		</view>
		<button type="warn" class="js">
			结算 <text>({{total}})</text>
		</button>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		computed: mapState({
			isSelectedAll: state => state.cart.isSelectedAll,
			total: state => state.cart.total,
			totalPrice: state => state.cart.totalPrice,
			isSelectAll: state => state.cart.isSelectAll,
			totalIndex: state => state.cart.totalIndex,
			orderList: state => state.cart.orderList,
		}),
		methods: {
			toggleRadio() {
				this.$store.commit("cart/changeAll", !this.isSelectAll)
				if (this.isSelectAll) {
					this.$store.commit("cart/clearTotalPrice")
					this.$store.commit("cart/toggleAll", this.isSelectedAll.map(item => 1))
					this.$store.commit("cart/changeTotal", wx.getStorageSync("goodsList").length);
				} else {
					this.$store.commit("cart/clearTotalPrice")
					this.$store.commit("cart/toggleAll", this.isSelectedAll.map(item => 0))
					this.$store.commit("cart/changeTotal", 0);
				}
			}
		},
	}
</script>

<style lang="scss">
	.container {
		.qx {
			flex: 3;
			padding: 15rpx;

			.radio {
				display: flex;
				align-items: center;

				text {
					margin-left: 15rpx;
				}
			}
		}

		.total {
			flex: 5;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.priceBox {
				color: #eb4450;
				margin-left: 15rpx;

				.price {
					font-size: 40rpx;
				}
			}

			.desc {
				color: #999999;
				font-size: 26rpx;
			}
		}

		.js {
			flex: 3;
			border-radius: none !important;
		}

		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750rpx;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		display: flex;
		border-bottom: 1rpx solid #FDFDFE;
	}
</style>
