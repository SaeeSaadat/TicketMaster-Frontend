<template>
    <div class="col sidebar">
        <a v-for="i in sidebarItems" class="text-white row btn btn-block mt-3" :href="i.href">{{i.innerText}}</a>
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
