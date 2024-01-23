<template>
    <div v-if="!role">
        <register-product/>
    </div>
    <div v-else>
        <card type="user" class="mx-auto mt-4 mb-5" style="width:45%;">
            <div class="author mb-5 w-100">
                <img class="mb-5" :src="myProductPicture" alt="..." />
                <h3 class="title mb-3">{{myProductTitle}}</h3>
                <p class="description">{{myProductDescription}}</p>
            </div>
            <router-link to="dashboard/editProduct" class="btn btn-primary w-100">Edit</router-link>
        </card>
        <all-tickets />
    </div>
</template>

<script>
import RegisterProduct from "@/pages/ProductProfile/RegisterProduct.vue";
import AllTickets from "@/pages/Tickets/AllTickets.vue";

import { SaveMyProductDataInLocalStorage } from "./MyProductFunctions"

export default {
    components: {
        RegisterProduct,
        AllTickets
    },
    mounted() {
        SaveMyProductDataInLocalStorage(this.myProductTitle, this.myProductDescription, this.myProductPicture)
    },
    computed: {
        role() {
            const role = localStorage.getItem('role')
            return role == 'null' ? '' : role;
        },
        myProductTitle() {
            return localStorage.getItem("myProductTitle")
        },
        myProductDescription() {
            return localStorage.getItem("myProductDescription")
        },
        myProductPicture() {
            return localStorage.getItem("myProductPicture")
        }
    }
};
</script>