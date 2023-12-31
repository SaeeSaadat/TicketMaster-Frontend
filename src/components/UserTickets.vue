<template>
    <div class="row">
        <div v-for="i in this.tickets" class="font-icon-list col-4">
            <div id="cardBodyDetails">
                <p class="h3 mb-2">{{ resizeText(i.title, "title") }}</p>
                <div class="dflex">
                    <i class="fa fa-clock"></i>&nbsp;
                    <span>Created: 1402/09/26</span>
                </div>
                <div class="dflex">
                    <i class="fa fa-calendar"></i>&nbsp;
                    <span>DueDate: 1402/09/26</span>
                </div>
                <i title="Lamp" class="text-white fa fa-bug mt-3"></i>
                <p></p>
                <router-link to="/dashboard/ticket" class="btn btn-primary mt-3">Show</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tickets: {
            type: Array,
        }
    },
    methods: {
        resizeText(text) {
            return text.length >= 27 ? text.substr(0, 20) + "..." : text;
        },
    },
}
</script>

<style>
#cardBodyDetails {
    text-align: center;
    padding: 45px 0 30px;
    border: 1px solid #e44cc4;
    border-radius: .1875rem;
    margin: 15px 0;
    min-height: 168px;
}
</style>