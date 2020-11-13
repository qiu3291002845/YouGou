<template>
	<view>
		<MSearch></MSearch>
		<view class="content">
			<Left class="left"></Left>
			<Right class="right"></Right>
		</view>
	</view>
</template>

<script>
	import MSearch from "../GlobalComponents/Search/search.vue";
	import Left from "./left/Left.vue"
	import Right from "./right/Right.vue"
	export default {
		components: {
			MSearch,
			Left,
			Right
		},
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		padding-top: 20rpx;
		.left {
			flex: 1
		}

		.right {
			flex: 3
		}
	}
</style>
