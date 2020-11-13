<template>
	<view class="contentBox">
		<view class="picText" v-if="isTab">
			<image src="../../../static/bannerContent.jpg" mode=""></image>
		</view>
		<view class="specArg" v-else>
			<view class="item" v-for="item in info.attrs" :key="item.attr_id">
				<view class="name">
					{{item.attr_name}}
				</view>
				<view class="value">
					<text>
						{{item.attr_vals}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		computed: mapState({
			isTab: state => state.detail.isTab,
			info: (state) => state.detail.info
		}),
	}
</script>

<style lang="scss">
	.contentBox {
		margin-bottom: 120rpx;
		padding: 0 10rpx;
		padding-top: 15rpx;

		.item {
			border-collapse: collapse;
			display: flex;
			align-items: center;
			box-sizing: border-box;

			view {
				flex: 1;
				height: 50rpx;
				font-size: 26rpx;
				border: 1rpx solid #bfbfbf;
				padding: 30rpx;
				line-height: 50rpx;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
				-ms-text-overflow: ellipsis;
				white-space: nowrap;

				&.name {
					text-align: center;
				}
			}
		}

		.picText {
			width: 750rpx;
			height: 200rpx;
		}
	}
</style>
