<template>
	<view class="container" @click="toDetail">
		<view class="img">
			<image :src="goods.goods_big_logo == ''?'/static/model.jpg':goods.goods_big_logo" mode=""></image>
		</view>
		<view class="content">
			<div class="title">
				{{goods.goods_name}}
			</div>
			<div class="price">
				<text>￥</text><text class="big">{{goods.goods_price}}</text><text>.00</text>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {}
		},
		data() {
			return {
				goods: {}
			}
		},
		methods: {
			async findGoodsDetail(id) {
				const [error, res] = await uni.request({
					url: `https://uinav.com/api/public/v1/goods/detail?goods_id=${id}`
				});
				this.goods = res.data.message
			},
			toDetail(){
				uni.navigateTo({
					url:`/pages/detail/detail?id=${this.goods.goods_id}`
				})
			}
		},
		created() {
			this.findGoodsDetail(this.item.goods_id)
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		border-bottom: 1px solid rgba($color: #999, $alpha: 0.2);

		.img {
			flex: 1;
			padding: 25rpx;
		}

		.content {
			margin-left: 20rpx;
			flex: 2;
			display: flex;
			flex-direction: column;
			padding: 30rpx 20rpx;

			.title {
				flex: 1;
				height: auto;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				margin-bottom: 100rpx;
				font-size: 30rpx;
				line-height: 40rpx;
				letter-spacing: 5rpx;
			}

			.price {
				flex: 1;
				color: #ff0000;

				.big {
					font-size: 50rpx;
				}
			}
		}
	}
</style>
