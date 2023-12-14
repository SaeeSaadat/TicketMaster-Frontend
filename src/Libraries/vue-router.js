import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes.js";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes,
	scrollBehavior: (to) => {
		return to.hash ? { selector: to.hash } : { x: 0, y: 0 };
	},
});
