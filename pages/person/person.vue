<template>
	<view>
		<UserInfo></UserInfo>
		<PersonList></PersonList>
		<Order></Order>
		<Status></Status>
	</view>
</template>

<script>
	import UserInfo from "./UserInfo/UserInfo.vue"
	import PersonList from "./PersonList/PersonList.vue"
	import Order from "./Order/Order.vue"
	import Status from "./Status/Status.vue"
	export default {
		components: {
			UserInfo,
			PersonList,
			Order,
			Status
		},
		data() {
			return {

			}
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}
</style>
