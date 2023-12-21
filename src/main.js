//Main App
import Vue from "vue";
import App from "./App.vue";

//Styles
import "@/assets/sass/black-dashboard.scss";

//Plugins
import router from "@/Plugins/vue-router.js";
import store from "@/Plugins/store";
import "@/Plugins/card.js";
import "@/Plugins/axios.js";
import "@/Plugins/vue-toast.js";

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
