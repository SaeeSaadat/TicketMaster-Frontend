import Vue from "vue"
import axios from "axios";

Vue.mixin({
	beforeCreated() {
		axios.interceptors.response.use("", (error) => {
			if (error.response.status === 401) this.$router.push("/login");
		});
	},
});

Object.defineProperty(Vue.prototype, "$axios", {
	value: axios.create({
		baseURL: import.meta.env.VUE_APP_BASE_URL,
	}),
});