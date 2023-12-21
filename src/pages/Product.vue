<template>
    <div>
        <product-manage-page/>
        <product-all-tickets/>
    </div>
</template>

<script>
import ProductManagePage from "@/components/Product/ProductManagePage.vue";
import AllProductTickets from "@/components/Product/AllProductTickets.vue";
export default {
    components: {
        AllProductTickets,
        ProductManagePage
    },
};
</script>