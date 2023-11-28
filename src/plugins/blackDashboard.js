import SideBar from "@/components/SidebarPlugin";
import Notify from "@/components/NotificationPlugin";
import GlobalComponents from "./globalComponents";

import "@/assets/sass/black-dashboard.scss";
import "@/assets/css/nucleo-icons.css";

export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(SideBar);
    Vue.use(Notify);
  }
}
