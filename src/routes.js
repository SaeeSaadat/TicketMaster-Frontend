//MainPages
const Dashboard = () => import("@/pages/Dashboard.vue");

//User
const UserProfile = () => import("@/pages/UserProfile/User.vue");
const EditUser = () => import("@/pages/UserProfile/EditUser.vue");

//MyBusinessProduct
const Product = () => import("@/pages/MyProduct.vue");

//OtherBusinessProduct
const BusinessProduct = () => import("@/pages/BusinessProduct");

//Auth
const Login = () => import("@/pages/Auth/Login.vue");
const Signup = () => import("@/pages/Auth/Signup.vue");

//Tickets
const Ticket = () => import("@/pages/Tickets/Ticket.vue");
const AllUserTickets = () => import("@/pages/Tickets/AllUserTickets.vue");

//Layout & Components
const NotFound = () => import("@/pages/NotFoundPage.vue");
const DashboardLayout = () => import("@/Layout/FullPage.vue");

const routes = [
	{ path: "/", redirect: "/login" },
	{ path: "/login", component: Login },
	{ path: "/signup", component: Signup },
	{
		path: "/dashboard",
		component: DashboardLayout,
		children: [
			{
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
				path: "myTickets",
				name: "All Tickets",
				component: AllUserTickets,
			},
			{
				path: "myProduct",
				name: "manage/register product",
				component: Product,
			},
			{
				path: "editProfile",
				name: "Edit Profile",
				component: EditUser,
			},
			{
				path: "ticket",
				name: "ticket",
				component: Ticket,
			},
			{ path: "/product/:id", name: "Business Product", component: BusinessProduct },
		],
	},
	{ path: "*", component: NotFound },
];

export default routes;
