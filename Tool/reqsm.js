export const reqsm = async (url, method, data) => {
	return await uni.request({
		url:`https://uinav.com${url}`,
		method:method || "Get",
		data:data || {}
	})
}
