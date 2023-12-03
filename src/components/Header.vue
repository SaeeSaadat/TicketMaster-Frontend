<template>
    <nav id="header" class="navbar navbar-absolute h3 text-white w-4">
        <div class="container-fluid">
            {{this.$route.name}}
        </div>
    </nav>
</template>

<style>
#header {
    background-color: #1E1D2E;
    margin-top: 10px;
    position: fixed;
    width: 20px;
}
</style>