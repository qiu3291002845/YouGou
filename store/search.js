export const ModuleSearch = {
	state: {
		goods: [],
		isNull: false,
		total: 0,
		pagenum: 0,
		keyword: ""
	},
	mutations: {
		toggleIsNull(state, bool) {
			state.isNull = bool
		},
		changeGoods(state, res) {
			state.goods = res;
		},
		changeKeyword(state, res) {
			state.keyword = res;
		},
		clearList(state) {
			state.goods = []
		},
		changePagenum(state,num) {
			state.pagenum = num
		},
		clearPagenum(state) {
			state.pagenum = 0
		},
	},
	actions: {},

	namespaced: true,
}
