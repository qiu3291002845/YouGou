<template>
	<div class="searchBox">
	  <input type="text" placeholder="搜索" />
	</div>
</template>

<script>
</script>

<style lang="scss">
	.searchBox {
	  background: #ff2d4a;
	  height: 75rpx;
	  width: 750rpx;
	  padding: 20rpx 0;
	  input {
	    width: 90%;
	    margin: 0 auto;
	    height: 100%;
	    background: #fff;
	    border-radius: 10rpx;
	    -webkit-border-radius: 10rpx;
	    -moz-border-radius: 10rpx;
	    -ms-border-radius: 10rpx;
	    -o-border-radius: 10rpx;
	    text-align: center;
	    &::placeholder {
	      text-align: center;
	      margin: 0 auto;
	    }
	  }
	}

</style>
