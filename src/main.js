//Main App
import Vue from "vue";
import App from "./App.vue";

//Styles
import "@/assets/sass/black-dashboard.scss";

//Plugins
import router from "@/Plugins/vue-router.js"
import "@/Plugins/vue-notification.js"
import "@/Plugins/card.js"
import "@/Plugins/axios.js"

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
