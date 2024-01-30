//Main App
import Vue from "vue";
import App from "./App.vue";

//Styles
import "@/assets/sass/black-dashboard.scss";

//Libraries
import router from "@/Plugins/Libraries/vue-router.js";
import "@/Plugins/Libraries/axios.js";
import "@/Plugins/Libraries/vue-toast.js";

//Customed Components
import "@/Plugins/Components/card.js";
import "@/Plugins/Components/customed-input.js";

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
