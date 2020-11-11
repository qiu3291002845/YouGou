export const ModuleSearch = {
	state: {
		goods: [],
		isNull: false,
		total: 0,
		pagenum: 1
	},
	mutations: {
		toggleIsNull(state, bool) {
			state.isNull = bool
		},
		changeGoods(state, res) {
			state.goods = res
		},
	},
	actions: {
	},

	namespaced: true,
}
