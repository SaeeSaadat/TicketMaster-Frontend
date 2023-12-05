<template>
    <div class="col sidebar bg-white" data="vue">
        <a v-for="i in sidebarItems" class="text-h3 btn btn-simple w-100 mt-3" :href="i.href"><u class="h4">{{i.innerText}}</u></a>
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
                    href: "/dashboard/businessTickets",
                    innerText: "businessTickets"
                },
                {
                    href: "/dashboard/userTickets",
                    innerText: "userTickets"
                }
            ]
        }
    },
};
</script>
