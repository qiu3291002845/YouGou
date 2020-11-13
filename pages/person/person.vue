<template>
	<view>
		<UserInfo></UserInfo>
	</view>
</template>

<script>
	import UserInfo from "./UserInfo/UserInfo.vue"
	export default {
		components:{
			UserInfo
		},
		data() {
			return {
				
			}
		},
		created(){
			wx.getUserInfo({
				success:res=>{
					console.log(res)
				}
			})
		}
	}
</script>

<style>

</style>
