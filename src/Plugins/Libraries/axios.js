import axios from "axios";
import Router from "./vue-router";
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
axios.interceptors.response.use(
	(res) => {
		return Promise.resolve(res);
	},
	(error) => {
		if (error && error.status == 401) Router.push("/login");
		return Promise.reject(error);
	}
);
