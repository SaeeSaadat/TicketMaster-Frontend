<template>
    <div class="col sidebar bg-white" data="vue">
        <a href="/dashboard/myProduct" class="btn btn-info text-white">myProduct</a>
        <a v-for="(value, index) in sidebarItems" class="text-h3 btn btn-simple border-0" :href="value.href">
            <p class="h3 text-white">{{ value.innerText }}</p>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sidebarItems: [{
                    href: "/dashboard/userProfile",
                    innerText: "userProfile",
                },
                {
                    href: "/dashboard/businessProfile",
                    innerText: "businessProfile",
                },
                {
                    href: "/dashboard/myTickets",
                    innerText: "myTickets",
                },
                {
                    href: "/dashboard",
                    innerText: "Dashboard",
                },
                {
                    href: "/dashboard/ticket",
                    innerText: "ticket",
                },
            ],
        };
    },
};
</script>
