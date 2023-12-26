//Main App
import Vue from "vue";
import App from "./App.vue";

//Styles
import "@/assets/sass/black-dashboard.scss";

//Libraries
import router from "@/Plugins/Libraries/vue-router.js";
import store from "@/Plugins/Libraries/store";
import "@/Plugins/Libraries/axios.js";
import "@/Plugins/Libraries/vue-toast.js";

//Customed Components
import "@/Plugins/Components/card.js";
import "@/Plugins/Components/customed-input.js";
import "@/Plugins/Components/customed-text-area.js";

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
