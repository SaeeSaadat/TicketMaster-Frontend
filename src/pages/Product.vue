<template>
    <div>
        <product-manage-page/>
        <product-all-tickets/>
    </div>
</template>

<script>
import ProductProfile from "@/components/Product/ProductProfile.vue";
import AllProductTickets from "@/components/Product/AllProductTickets.vue";
export default {
    components: {
        AllProductTickets,
        ProductProfile
    },
};
</script>