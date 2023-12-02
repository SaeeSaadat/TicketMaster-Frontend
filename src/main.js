import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import router from "./router/routes";

import SideBar from "@/components/SidebarPlugin";
import Notify from "@/components/NotificationPlugin";
import {
	Card,
	BaseDropdown,
	BaseCheckbox,
} from "@/components/index";

import "@/assets/sass/black-dashboard.scss";
import "@/assets/css/nucleo-icons.css";

Vue.component(Card.name, Card);
Vue.component(BaseDropdown.name, BaseDropdown);
Vue.component(BaseCheckbox.name, BaseCheckbox);

Vue.use(SideBar);
Vue.use(Notify);
Vue.use(VueRouter);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
