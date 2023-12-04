import VueRouter from "vue-router";

const MainPage = () => import("@/pages/MainPage.vue");
const BusinessProfile = () => import("@/pages/Profile/Business.vue");
const UserProfile = () => import("@/pages/Profile/User.vue");

const Login = () => import("@/pages/Auth/Login.vue");
const Signup = () => import("@/pages/Auth/Signup.vue");

const Ticket = () => import("@/pages/Tickets/Ticket.vue");
const AllBusinessTickets = () =>
	import("@/pages/Tickets/AllBusinessTickets.vue");
const AllUserTickets = () => import("@/pages/Tickets/AllUserTickets.vue");

const NotFound = () => import("@/components/NotFoundPage.vue");
const DashboardLayout = () => import("@/Layout/FullPage.vue");

const routes = [
	{ path: "/", redirect: "/login" },
	{ path: "/login", component: Login },
	{ path: "/signup", component: Signup },
	{
		path: "/dashboard",
		redirect: "/dashboard/main",
		component: DashboardLayout,
		children: [
			{
				path: "main",
				name: "Dashboard",
				component: MainPage,
			},
			{
				path: "userProfile",
				name: "Profile",
				component: UserProfile,
			},
			{
				path: "businessProfile",
				name: "Profile",
				component: BusinessProfile,
			},
			{
				path: "ticket",
				name: "Ticket",
				component: Ticket,
			},
			{
				path: "businessTickets",
				name: "All Tickets",
				component: AllBusinessTickets,
			},
			{
				path: "userTickets",
				name: "All Tickets",
				component: AllUserTickets,
			},
		],
	},
	{ path: "*", component: NotFound },
];

const router = new VueRouter({
	mode: "history",
	routes,
	scrollBehavior: (to) => {
		return to.hash ? { selector: to.hash } : { x: 0, y: 0 };
	},
});

export default router;
