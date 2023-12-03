<template>
    <div>
        <Sidebar class="sidebar" />
        <div class="main-panel">
            <Header />
            <div class="content">
                <Transition>
                    <router-view />
                </Transition>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Sidebar from "./Sidebar.vue";

export default {
    components: {
        Header,
        Footer,
        Sidebar,
    },
};
</script>
