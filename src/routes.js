//Layout & Components
const ProjectLayout = () => import("@/Layout/FullPage.vue");

//MainPage(Index)
const ProductLink = () => import("@/pages/ProductLink.vue");

//Authentication
const Login = () => import("@/pages/Auth/Login.vue");
const Signup = () => import("@/pages/Auth/Signup.vue");

//Product
const MyProduct = () => import("@/pages/ProductProfile/MyProduct.vue");
const UniqueProductPage = () => import("@/pages/ProductProfile/UniqueProductPage.vue");

//User
const UserInfo = () => import("@/pages/UserProfile/UserInfo.vue");
const EditUser = () => import("@/pages/UserProfile/EditUser.vue");

//Tickets
const Ticket = () => import("@/pages/Tickets/Ticket.vue");
const AllUserTickets = () => import("@/pages/Tickets/AllUserTickets.vue");

//404 Page
const PageNotFound = () => import("@/pages/404/NotFoundPage.vue");


const routes = [
	{ path: "/", redirect: "/login" },
	{ path: "/login", component: Login },
	{ path: "/signup", component: Signup },
	{
		path: "/dashboard",
		component: ProjectLayout,
		children: [
			{
				path: "/",
				name: "Dashboard",
				component: ProductLink,
			},
			{
				path: "userInfo",
				name: "myProfile",
				component: UserInfo,
			},
			{
				path: "myTickets",
				name: "My Tickets",
				component: AllUserTickets,
			},
			{
				path: "myProduct",
				name: "manage product",
				component: MyProduct,
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
			{ path: "/product/:id", name: "Business Product", component: UniqueProductPage },
		],
	},
	{ path: "*", component: PageNotFound },
];

export default routes;
