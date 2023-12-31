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
		setUserId(state, value) {
			state.userId = value;
		},
		setUsername(state, value) {
			state.username = value;
		},
	},
});

export default store;
