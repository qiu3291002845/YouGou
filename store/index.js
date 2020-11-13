import Vue from 'vue'
import Vuex from 'vuex'
import {
	ModuleSearch
} from "./search.js"
import {
	ModuleCategory
} from "./category.js"
import {
	ModuleDetail
} from "./detail.js"
import {
	ModulePerson
} from "./person.js"
import {
	ModuleCart
} from "./cart.js"
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		search: ModuleSearch,
		category: ModuleCategory,
		detail: ModuleDetail,
		person: ModulePerson,
		cart: ModuleCart
	},
	getters: {
		num: (state) => {
			return state.search.goods;
		}
	}
})
export default store
