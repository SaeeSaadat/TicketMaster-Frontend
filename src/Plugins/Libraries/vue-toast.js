import Vue from "vue";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

Vue.use(ToastPlugin, {
	position: "top-left",
	duration: 2000,
});
