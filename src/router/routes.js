import VueRouter from "vue-router";

const DashboardBody = () => import("@/pages/DashboardBody.vue");
const Profile = () => import("@/pages/Profile.vue");
const Icons = () => import("@/pages/Icons.vue");
const NotFound = () => import("@/pages/NotFoundPage.vue");
const Login = () => import("@/pages/Auth/Login.vue");
const Signup = () => import("@/pages/Auth/Signup.vue");
const DashboardLayout = () => import("@/components/FullPage.vue");

const routes = [
	{
		path: "/dashboard",
		component: DashboardLayout,
		children: [
			{
				path: "main",
				name: "Dashboard",
				component: DashboardBody,
			},
			{
				path: "profile",
				name: "profile",
				component: Profile,
			},
			{
				path: "icons",
				name: "icons",
				component: Icons,
			},
		],
	},
	{ path: "/", redirect: "/login" },
	{ path: "/login", component: Login },
	{ path: "/signup", component: Signup },
	{ path: "*", component: NotFound },
];

const router = new VueRouter({
	mode: "history",
	routes,
	linkExactActiveClass: "active",
	scrollBehavior: (to) => {
		if (to.hash) {
			return { selector: to.hash };
		} else {
			return { x: 0, y: 0 };
		}
	},
});

export default router;
