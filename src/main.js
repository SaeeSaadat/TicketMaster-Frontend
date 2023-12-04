import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

//Styles
import "@/assets/css/icons.css";
import "@/assets/sass/black-dashboard.scss";

//App
import App from "./App.vue";
import router from "./router/routes.js";

//Components
import Card from "@/components/Customs/Card/CustomedCard.vue";

// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

Vue.component(Card.name, Card);

// Vue.mixin({
// 	beforeCreated() {
// 		axios.interceptors.response.use("", (error) => {
// 			if (error.response.status === 401) this.$router.push("/login");
// 		});
// 	},
// });
Vue.use(VueRouter);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
