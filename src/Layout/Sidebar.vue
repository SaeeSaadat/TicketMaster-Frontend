<template>
    <div class="col sidebar bg-white" data="vue">
        <a href="/dashboard/myProduct" class="btn btn-simple mt-5 mb-4 w-100">
            <div class="d-inline-flex">
                <i class="fa fa-cart-shopping my-auto"></i>
                <span v-if="this.$store.state.personType == 'admin'" class="my-auto ml-3">Manage Product</span>
                <span v-else-if="this.$store.state.personType == 'user'" class="my-auto ml-3">Register Product</span>
            </div>
        </a>
        <a v-for="(value, index) in sidebarItems" class="btn btn-simple border-0 w-100 text-left" :href="value.href">
            <div class="d-inline-flex">
                <i class="my-auto text-white fa" :class="value.icon"></i>
                <span class="h4 text-white ml-2 my-auto">{{ value.innerText }}</span>
            </div>
        </a>
        <p class="mb-4"></p>
        <button @click="Logout" class="btn btn-simple mt-5 w-100">
            <div class="d-inline-flex">
            <i class="fa fa-power-off my-auto"></i>
            <span class="my-auto ml-2">Logout</span>
            </div>
        </button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            sidebarItems: [{
                    icon: "fa-user",
                    href: "/dashboard/userProfile",
                    innerText: "My Profile",
                },
                {
                    icon: "fa-list-check",
                    href: "/dashboard/myTickets",
                    innerText: "My Tickets",
                },
                {
                    icon: "fa-chart-line",
                    href: "/dashboard",
                    innerText: "Dashboard",
                },
            ],
        };
    },
    methods: {
        async Logout() {
            axios.post("/auth/logout").then(() => {
                this.$toast.success('Logout Successfully!');
                setTimeout(() => {
                    this.$router.push("/login");
                }, 1000);
            })
        },
    },
};
</script>
