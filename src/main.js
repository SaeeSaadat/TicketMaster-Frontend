//Main App
import Vue from "vue";
import App from "./App.vue";

//Styles
import "@/assets/sass/black-dashboard.scss";

//Plugins
import "@/Plugins/card.js"

//Libraries
import router from "@/Libraries/vue-router.js"
import "@/Libraries/axios.js"
import "@/Libraries/vue-toast.js"

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
