<template>
	<div class="flootDataBox">
		<view class="titleImg">
			<image :src="list.floor_title.image_src" mode="widthFix"></image>
		</view>
		<view class="titleList">
			<view class="left">
				<image @click="toBigSearch" :src="list.product_list[0].image_src"></image>
			</view>
			<view class="right">
				<view class="imgBox" v-for="(item,index) in rightList" :key="index">
					<image @click="toSearch(index)" :src="item.image_src"></image>
				</view>
			</view>
		</view>

	</div>
</template>

<script>
	export default {
		props: {
			item: {}
		},
		data() {
			return {
				list: [],
				rightList: [],
				rightNav: []
			}
		},
		created() {
			this.list = this.item;
			this.rightList = this.item.product_list.splice(1);
			this.rightNav = this.rightList.map(item => {
				return item.navigator_url.split("=")[1];
			})
		},
		methods: {
			toBigSearch() {
				uni.navigateTo({
					url: `/pages/Search/Search?keyword=${this.list.product_list[0].navigator_url.split("=")[1]}`,
				})
			},
			toSearch(i) {
				uni.navigateTo({
					url: `/pages/Search/Search?keyword=${this.rightNav[i]}`,
				})
			}
		}
	}
</script>

<style lang="scss">
	.flootDataBox {
		margin: 10rpx 0;

		image {
			border-radius: 5rpx;
		}

		.titleImg {
			display: flex;
			align-items: center;
			background-color: #f4f4f4;
			width: 750rpx;
			height: 88rpx;
		}

		.titleList {
			margin-top: 10rpx;
			display: flex;
			height: 375rpx;

			.left {
				flex: 1;
				padding-left: 10rpx;
			}

			.right {
				flex: 2;
				display: flex;
				flex-wrap: wrap;

				.imgBox {
					width: 47%;
					height: 47%;
					padding: 1.5%;
				}
			}
		}
	}
</style>
