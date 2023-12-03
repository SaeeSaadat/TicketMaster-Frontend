import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import router from "./router/routes";

import SideBar from "@/components/SidebarPlugin";
import {
	Card,
} from "@/components/index";

import "@/assets/css/icons.css";

Vue.component(Card.name, Card);

Vue.use(SideBar);
Vue.use(VueRouter);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
