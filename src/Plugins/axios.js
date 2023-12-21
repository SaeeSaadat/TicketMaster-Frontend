import Vue from "vue";
import axios from "axios";
import Router from "@/Plugins/vue-router.js";
import Store from "@/Plugins/store.js";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

// Vue.mixin({
// 	beforeRouteEnter(to, from, next) {
// 		next((vm) => {
// 			if (to.path != "/login" && to.path != "/signup")
// 				axios
// 					.get("/auth/user")
// 					.then((res) => {
//                         console.log(res.data);
// 						// Store.state.personType = res.data.type;
// 						// Store.state.personId = res.data.userId;
// 						// Store.state.personUsername = res.data.username;
// 					})
// 					.catch(() => {
// 						Router.push("/login");
// 					});
// 		});
// 	},
// });
