<template>
	<view class="leftBox">
		<scroll-view scroll-y="true" class="viewBox">
			<view @click="toggleIndex(index)" class="box" :class="{'active':index == selected}" v-for="(item,index) in leftList"
			 :key="item.cat_id">{{item.cat_name}}</view>
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
			}
		},
		computed: mapState({
			leftList: (state) => state.category.leftList,
			selected: state => state.category.selected
		}),
		methods: {
			async findCategorys() {
				await this.$store.dispatch("category/findCategoryLeft");
			},
			toggleIndex(i) {
				this.$store.commit("category/toggleIndex",i);
			}
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
	.leftBox {
		flex: 1;

		.viewBox {
			height: 100vh;

			.box {
				width: 198rpx;
				height: 60rpx;
				padding: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #333333;
				font-weight: 500;
				border-bottom: 1px solid #eeeeee;
				background: #f4f4f4;
				font-size: 28rpx;

				&.active {
					color: #eb4450;
					background: #ffffff;
				}
			}
		}
	}
</style>
