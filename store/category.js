import {
	reqsm
} from "../Tool/reqsm.js"
export const ModuleCategory = {
	state: {
		leftList: [],
		rightList: [],
		selected: 0
	},
	mutations: {
		changeLeftList(state, res) {
			state.leftList = res;
		},
		changeRightList(state, res) {
			state.rightList = res;
		},
		toggleIndex(state, i) {
			state.selected = i;
		}
	},
	actions: {
		async findCategoryLeft({
			commit
		}) {
			let list = []
			const [error, res] = await reqsm("/api/public/v1/categories");
			list = res.data.message.map(item => {
				return {
					cat_icon: item.cat_icon,
					cat_name: item.cat_name,
					cat_id: item.cat_id
				}
			});
			commit("changeLeftList", list)
		},
		async findCategoryRight({
			commit
		}) {
			const [error, res] = await reqsm("/api/public/v1/categories");
			commit("changeRightList", res.data.message)
		}
	},
	namespaced: true,
}
