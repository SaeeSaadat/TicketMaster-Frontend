import Vue from "vue";

//Libraries
import VueRouter from "vue-router";
import axios from "axios";
import Notifications from "vue-notification";

//Styles
import "@/assets/sass/black-dashboard.scss";

//App
import App from "./App.vue";
import router from "./router/routes.js";

//Components
import Card from "@/components/Customs/Card/CustomedCard.vue";

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

Vue.component(Card.name, Card);

Vue.use(VueRouter);
Vue.use(Notifications);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
