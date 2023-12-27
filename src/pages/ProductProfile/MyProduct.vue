<template>
    <div v-if="this.$store.state.personType=='admin'">
        <card type="user" class="mx-auto mt-4 mb-5" style="width:45%;">
            <div class="author mb-5 w-100">
                <img class="mb-5" src="https://fastly.picsum.photos/id/450/200/300.jpg?hmac=EAnz3Z3i5qXfaz54l0aegp_-5oN4HTwiZG828ZGD7GM" alt="..." />
                <h3 class="title mb-3">Testing the Username</h3>
                <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum consequatur, possimus, numquam, obcaecati cupiditate corrupti mollitia molestias velit iusto sequi incidunt eum suscipit architecto laborum voluptatum odio labore! In!</p>
            </div>
            <a href="#" class="btn btn-primary w-100">Edit</a>
        </card>
        <all-tickets />
    </div>
    <div v-else-if="this.$store.state.personType=='user'">
        <register-product/>
    </div>
</template>

<script>
import RegisterProduct from "@/pages/ProductProfile/RegisterProduct.vue";
import AllTickets from "@/pages/Tickets/AllTickets.vue";

export default {
    components: {
        RegisterProduct,
        AllTickets
    },
};
</script>