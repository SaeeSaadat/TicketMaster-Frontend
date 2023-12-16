//MainPages
const Dashboard = () => import("@/pages/Dashboard.vue");
const BusinessProfile = () => import("@/pages/Profile/Business.vue");
const UserProfile = () => import("@/pages/Profile/User.vue");

//Auth
const Login = () => import("@/pages/Auth/Login.vue");
const Signup = () => import("@/pages/Auth/Signup.vue");

//Tickets
const Ticket = () => import("@/pages/Tickets/Ticket.vue");
const AllTickets = () => import("@/pages/Tickets/AllTickets.vue");

//Layout & Components
const NotFound = () => import("@/components/NotFoundPage.vue");
const DashboardLayout = () => import("@/Layout/FullPage.vue");

const routes = [
	{ path: "/", redirect: "/login" },
	{ path: "/login", component: Login },
	{ path: "/signup", component: Signup },
	{
		path: "/dashboard",
		component: DashboardLayout,
		children: [{
				path: "/",
				name: "Dashboard",
				component: Dashboard,
			},
			{
				path: "userProfile",
				name: "userProfile",
				component: UserProfile,
			},
			{
				path: "businessProfile",
				name: "businessProfile",
				component: BusinessProfile,
			},
			{
				path: "ticket",
				name: "Ticket",
				component: Ticket,
			},
			{
				path: "myTickets",
				name: "All Tickets",
				component: AllTickets,
			},
			{
				path: "myProduct",
				name: "manage/register product",
				component: AllTickets,
			}	
		]
	},
	{ path: "*", component: NotFound },
];

export default routes;