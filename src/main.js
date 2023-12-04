import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import router from "./router/routes.js";

import Card from "@/components/Customs/Card/CustomedCard.vue";

import "@/assets/css/icons.css";
import "@/assets/sass/black-dashboard.scss"

Vue.component(Card.name, Card);

Vue.use(VueRouter);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
