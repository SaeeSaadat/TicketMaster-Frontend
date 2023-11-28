<template>
    <div class="wrapper">
        <side-bar>
            <template slot="links">
                <sidebar-link to="/dashboard" icon="tim-icons icon-chart-pie-36" name="Dashboard"/>
                <sidebar-link to="/icons" icon="tim-icons icon-atom" name="Icons"/>
                <sidebar-link to="/notifications" icon="tim-icons icon-bell-55" name="Notifictations"/>
                <sidebar-link to="/profile" icon="tim-icons icon-single-02" name="Profile"/>
                <sidebar-link to="/typography" icon="tim-icons icon-align-center" name="Typography"/>
            </template>
        </side-bar>
        <div class="main-panel">
            <Header />
            <div class="content">
                <fade-transition>
                    <router-view></router-view>
                </fade-transition>
            </div>
            <Footer />
        </div>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
    components: {
        Header,
        Footer,
    }
};
</script>
