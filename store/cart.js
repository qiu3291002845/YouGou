import {
	reqsm
} from "../Tool/reqsm.js"
export const ModuleCart = {
	state: {
		isSelectedAll: [],
		orderList: [],
		goodsList: [],
		total: 0,
		totalPrice: 0,
		totalPriceList: [],
		totalIndex: 0,
		isSelectAll: false,
		isNull:true
	},
	mutations: {
		toggleRadio(state, res) {
			state.isSelectedAll[res.index] = res.val ? 1 : 0;
		},
		toggleAll(state, res) {
			state.isSelectedAll = res;
		},
		toggleIsNull(state,res){
			state.isNull = res;
		},
		totalIndex(state, res) {
			state.totalIndex = res;
			for (var i = 0; i < state.totalIndex; i++) {
				state.isSelectedAll[i] = 0;
			}
		},
		findOrder(state, res) {
			state.orderList = res
		},
		changeGoodsList(state, res) {
			state.goodsList = res;
		},
		changeAll(state, res) {
			state.isSelectAll = res
		},
		changeTotal(state, res) {
			state.total = res
		},
		changeTotalPrice(state, res) {
			state.totalPriceList.push(res)
			state.totalPrice = state.totalPriceList.reduce((a, v) => {
				return a + v
			});
		},
		clearTotalPrice(state,res){
			state.totalPriceList = []
			state.totalPrice = 0
		}
	},
	actions: {
		async findOrder({
			commit
		}, list) {
			const [err, res] = await reqsm(`/api/public/v1/goods/goodslist?goods_ids=${list}`)
			commit("findOrder", res.data.message)
		}
	},
	namespaced: true
}
