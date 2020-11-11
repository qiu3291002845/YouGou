import Vue from 'vue'
import Vuex from 'vuex'
import {
	ModuleSearch
} from "./search.js"
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		search: ModuleSearch
	},
	getters: {
		num: (state) => {
			return state.search.goods;
		}
	}
})
export default store
