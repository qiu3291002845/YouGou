<template>
	<view class="rightBox">
		<scroll-view scroll-y="true" class="viewBox">
			<view class="viewContent">
				<view class="titleImg">
					<image src="/static/icon/titleImage.png" mode=""></image>
				</view>
				<view class="contentBox" v-for="item in dto[selected].children" :key="item.cat_id">
					<view class="title">
						{{item.cat_name}}
					</view>
					<view class="content">
						<div class="item" v-for="child in item.children" :key="item.cat_id">
							<image :src="child.cat_icon" mode="widthFix"></image>
							<text>
								{{child.cat_name}}
							</text>
						</div>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		data() {
			return {
				dto: {}
			}
		},
		computed: mapState({
			rightList: (state) => state.category.rightList,
			selected: state => state.category.selected
		}),
		methods: {
			async findCategorys() {
				await this.$store.dispatch("category/findCategoryRight");
				this.dto = this.$store.state.category.rightList;
			},
		},
		async created() {
			uni.showLoading({
				title: '加载中'
			});
			await this.findCategorys();
			uni.hideLoading()
		}
	}
</script>

<style lang="scss">
	.rightBox {
		flex: 3;

		.viewBox {
			height: 100vh;

			.titleImg {
				width: 520rpx;
				height: 180rpx;
			}

			.contentBox {
				.title {
					font-weight: 550;
					text-align: center;
					margin: 25rpx auto 0;
					font-size: 40rpx;
				}

				.content {
					display: flex;
					flex-wrap: wrap;
					width: 520rpx;
					.item {
						width: 120rpx;
						height: 150rpx;
						padding: 10rpx 25rpx;
						display: flex;
						flex-direction: column;
						image{
							height: 70%;
						}
						text{
							text-align: center;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							font-size: 24rpx;
						}
					}
				}
			}
		}

	}
</style>
