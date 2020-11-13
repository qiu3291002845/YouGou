import {
	reqsm
} from "../Tool/reqsm.js"
export const ModuleDetail = {
	state: {
		info: {},
		isTab:true
	},
	mutations: {
		changeInfo(state, res) {
			state.info = res
		},
		toggleTab(state){
			state.isTab = !state.isTab
		}
	},
	actions: {
		async findGood({
			commit
		}, id) {
			const [err, res] = await reqsm(`/api/public/v1/goods/detail?goods_id=${id}`)
			commit("changeInfo", res.data.message)
		}
	},
	namespaced: true,
}
