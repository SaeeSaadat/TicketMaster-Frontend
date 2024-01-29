<template>
	<div v-if="!role">
		<register-product />
	</div>
	<div v-else>
		<admin-product-page />
		<all-admin-tickets />
	</div>
</template>

<script>
import RegisterProduct from "@/pages/ProductProfile/RegisterProduct.vue";
import AdminProductPage from "@/pages/ProductProfile/RegisterProduct.vue";
import AllAdminTickets from "@/pages/Tickets/AllAdminTickets.vue";

export default {
	components: {
		RegisterProduct,
		AllAdminTickets,
	},
	computed: {
		role() {
			const role = localStorage.getItem("role");
			return role == "null" ? "" : role;
		},
	},
};
</script>
