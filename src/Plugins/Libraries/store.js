import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		role: "",
		userId: "",
		username: "",
		myProductTitle: "",
		myProductDescription: "",
		myProductPicture: "",
	},
	mutations: {
		setRole(state, value) {
			state.role = value;
		},
	},
});

export default store;
