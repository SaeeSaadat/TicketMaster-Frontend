import Vue from "vue"
import axios from "axios";

// Vue.mixin({
// 	beforeCreated() {
// 		axios.interceptors.response.use("", (error) => {
// 			if (error.response.status === 401) this.$router.push("/login");
// 		});
// 	},
// });

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;