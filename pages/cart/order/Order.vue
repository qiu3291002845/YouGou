<template>
	<view class="container" v-if="storageList.length > 0">
		<checkbox-group class="radio" @change="toggleSelected">
			<label>
				<checkbox color="#eb4450" :value="isSelect" :checked="isSelect" />
			</label>
		</checkbox-group>
		<view class="img">
			<image :src="item.goods_small_logo" mode=""></image>
		</view>
		<view class="info">
			<view class="title hide-text-2">
				{{item.goods_name}}
			</view>
			<view class="price">
				<view class="text-danger">
					<text>￥</text>
					<text class="big">{{item.goods_price}}</text>
					<text>.00</text>
				</view>
				<view class="action">
					<button class="btns jian" @click="jian">
						-
					</button>
					<view class="num">
						{{storageList.length}}
					</view>
					<button class="btns jia" @click="jia">
						+
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		computed: mapState({
			totalPrice: state => state.cart.totalPrice,
			isSelectedAll: state => state.cart.isSelectedAll,
			totalIndex: state => state.cart.totalIndex,
			orderList: state => state.cart.orderList,
			total: state => state.cart.total,
		}),
		props: {
			item: {},
			sIndex: Number
		},
		data() {
			return {
				isSelect: false,
				isNull: false,
				storageList: [],
				info: this.item,
				isChecked: false
			}
		},
		watch: {
			isSelectedAll(n, o) {
				if (n[this.sIndex]) {
					let price = (this.storageList.length * this.item.goods_price)
					this.$store.commit("cart/changeTotalPrice", price)
					this.isSelect = true;
					this.$store.commit("cart/changeTotal", this.total);
				} else {
					this.$store.commit("cart/clearTotalPrice")
					this.isSelect = false;
					this.$store.commit("cart/changeTotal", 0);
				}
			}
		},
		methods: {
			toggleSelected() {
				this.isSelect = !this.isSelect;
				this.$store.commit("cart/toggleRadio", {
					index: this.sIndex,
					val: this.isSelect
				})
				if ((this.isSelectedAll.filter(item =>
						item == 1).length) == this.totalIndex) {
					this.$store.commit("cart/changeAll", true);
				} else {
					this.$store.commit("cart/changeAll", false);
				}
				if (this.isSelect) {
					let price = (this.storageList.length * this.item.goods_price)
					this.$store.commit("cart/changeTotalPrice", price);
					this.$store.commit("cart/changeTotal", this.storageList.length + this.total);
				} else {
					let price = -(this.storageList.length * this.item.goods_price);
					this.$store.commit("cart/changeTotalPrice", price)
					this.$store.commit("cart/changeTotal", this.total - this.storageList.length);
				}
			},
			async jia() {
				await wx.setStorageSync("goodsList", [...wx.getStorageSync("goodsList"), this.item.goods_id]);
				if (this.isSelect) {
					console.log(this.total)
					this.$store.commit("cart/changeTotal", this.total + 1);
				}
				this.findNum()
				if (this.isSelect) {
					this.$store.commit("cart/changeTotalPrice", this.item.goods_price)
				}
			},
			async jian() {
				let list = wx.getStorageSync("goodsList");
				const index = wx.getStorageSync("goodsList").indexOf(this.item.goods_id);
				await list.splice(index, 1)
				await wx.setStorageSync("goodsList", list);
				if (this.isSelect) {
					this.$store.commit("cart/changeTotal", this.total - 1);
					this.$store.commit("cart/changeTotalPrice", -this.item.goods_price)
					if (this.total == 0) {
						this.$store.commit("cart/changeAll", false);
					}
				}
				if (wx.getStorageSync("goodsList").length == 0) {
					this.$store.commit("cart/toggleIsNull", true);
				}
				this.findNum();
			},
			async findNum() {
				if (wx.getStorageSync("goodsList")) {
					this.storageList = wx.getStorageSync("goodsList").filter(item => {
						return item == this.item.goods_id
					})
				}
			}
		},
		onLoad() {
			this.findNum()
		},
		onReady() {
			this.findNum();
		},
	}
</script>

<style lang="scss">
	.container {
		.info {
			flex: 6;
			display: flex;
			flex-direction: column;

			.title {
				font-size: 36rpx;
				overflow: hidden;
				margin-bottom: 15rpx;
			}

			.price {
				display: flex;
				justify-content: space-between;

				.big {
					font-size: 40rpx;
				}

				.action {
					display: flex;
					align-items: center;

					.btns {
						width: 50rpx;
						height: 50rpx;
						display: flex;
						line-height: 50rpx;
						justify-content: center;
						align-items: center;
						border: 1rpx solid #999999;
						margin: 0 15rpx;
					}
				}
			}
		}

		.img {
			flex: 2;
			height: 210rpx;
			margin: 0 15rpx;
		}

		.radio {
			flex: 1;
			padding: 15rpx;
		}

		padding: 15rpx 15rpx;
		height: 210rpx;
		border-top: 1rpx solid #dddddd;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
