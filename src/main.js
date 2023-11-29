import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import router from "./router/routes";

import SideBar from "@/components/SidebarPlugin";
import Notify from "@/components/NotificationPlugin";
import {
	BaseInput,
	Card,
	BaseDropdown,
	BaseButton,
	BaseCheckbox,
} from "@/components/index";

import "@/assets/sass/black-dashboard.scss";
import "@/assets/css/nucleo-icons.css";

Vue.component(BaseInput.name, BaseInput);
Vue.component(Card.name, Card);
Vue.component(BaseDropdown.name, BaseDropdown);
Vue.component(BaseButton.name, BaseButton);
Vue.component(BaseCheckbox.name, BaseCheckbox);

Vue.use(GlobalComponents);
Vue.use(SideBar);
Vue.use(Notify);

Vue.use(BlackDashboard);
Vue.use(VueRouter);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
