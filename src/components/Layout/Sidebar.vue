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
                    href: "/dashboard/main",
                    innerText: "Dashboard"
                },
                {
                    href: "/dashboard/icons",
                    innerText: "Icons"
                },
                {
                    href: "/dashboard/profile",
                    innerText: "Profile"
                },
            ]
        }
    },
};
</script>
