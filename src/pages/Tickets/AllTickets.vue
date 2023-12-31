<template>
    <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="form-group d-flex mt-4">
                        <input type="text" class="form-control my-auto mr-3 input-xl border-primary" />
                        <button class="btn my-auto mr-5 w-50">Search ...</button>
                    </div>
                </div>
                <div class="card-body">
                    <product-tickets v-if="this.$store.state.personType == 'admin'" :tickets="tickets" />
                    <user-tickets v-else-if="this.$store.state.personType == 'user'" :tickets="tickets" />
                </div>
            </div>
</template>

<script>
import UserTickets from "@/components/UserTickets.vue";
import ProductTickets from "@/components/ProductTickets.vue";
export default {
    components: {
        UserTickets,
        ProductTickets,
    },
    data() {
        return {
            tickets: [{
                    id: 1,
                    title: "testing the title",
                }
            ],
        };
    }
};
</script>
