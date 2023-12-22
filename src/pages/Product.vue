<template>
    <!-- <div v-if="this.$store.state.personType=='admin'">
        <product-profile class="mb-5"/>
        <all-product-tickets />
    </div>
    <div v-else-if="this.$store.state.personType=='user'">
        <register-product/>
    </div> -->
    <div>
        <product-profile class="mb-5"/>
        <all-product-tickets />
    </div>
</template>

<script>
import ProductProfile from "@/components/Product/ProductProfile.vue";
import RegisterProduct from "@/components/Product/RegisterProduct.vue";
import AllProductTickets from "@/components/Product/AllProductTickets.vue";

export default {
    components: {
        AllProductTickets,
        ProductProfile,
        RegisterProduct
    },
};
</script>