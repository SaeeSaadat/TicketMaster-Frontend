<template>
    <div class="col sidebar bg-white" data="vue">
        <button class="btn btn-info">Product</button>
        <a v-for="(value,index) in sidebarItems" class="text-h3 btn btn-simple border-0" :href="value.href"><p class="h3 text-white">{{value.innerText}}</p></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sidebarItems: [{
                    href: "/login",
                    innerText: "Login"
                },
                {
                    href: "/signup",
                    innerText: "Signup"
                },
                {
                    href: "/dashboard/main",
                    innerText: "Dashboard"
                },
                {
                    href: "/dashboard/userProfile",
                    innerText: "userProfile"
                },
                {
                    href: "/dashboard/businessProfile",
                    innerText: "businessProfile"
                },
                {
                    href: "/dashboard/ticket",
                    innerText: "ticket"
                },
                {
                    href: "/dashboard/myTickets",
                    innerText: "myTickets"
                },
                {
                    href: "/dashboard/myProduct",
                    innerText: "myProduct"
                },
                
            ]
        }
    },
};
</script>
