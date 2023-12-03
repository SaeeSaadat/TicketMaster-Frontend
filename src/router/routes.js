import VueRouter from "vue-router";

const Dashboard = () => import("@/pages/Dashboard.vue");
const Profile = () => import("@/pages/Profile.vue");
const Icons = () => import("@/pages/Icons.vue");
const Typography = () => import("@/pages/Typography.vue");
const NotFound = () => import("@/pages/NotFoundPage.vue");
const DashboardLayout = () => import("@/components/FullPage.vue");

const routes = [
	{
		path: "/",
		component: DashboardLayout,
		redirect: "/dashboard",
		children: [
			{
				path: "dashboard",
				name: "dashboard",
				component: Dashboard,
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
			{
				path: "typography",
				name: "typography",
				component: Typography,
			},
		],
	},
	{ path: "*", component: NotFound },
];

const router = new VueRouter({
	mode:'history',
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
