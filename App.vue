<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import url("/iconfont.scss");

	/*每个页面公共css */
	image {
		width: 100%;
		height: 100%;
	}

	.text-danger {
		color: #ff2d4a;
	}

	.text-dark {
		color: #333333;
	}

	.text-dark-50 {
		color: #999999;
	}

	.hide-text-2 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
