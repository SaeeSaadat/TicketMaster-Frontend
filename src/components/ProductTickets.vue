<template>
    <div class="row">
        <div v-for="i in this.tickets" class="font-icon-list col-4">
            <div id="cardBodyDetails">
                <i title="Lamp" class="text-white fa fa-lightbulb"></i>
                <p class="h3 mb-2">{{ resizeText(i.title, "title") }}</p>
                <div>
                    Status: open/closed/pending/needs reply
                </div>
                <div class="dflex">
                    <i class="fa fa-clock"></i>&nbsp;
                    <span>1402/09/26    14:25</span>
                </div>
                <div class="dflex">
                    <i class="fa fa-calendar"></i>&nbsp;
                    <span>DueDate: 1402/09/26</span>
                </div>
                <p>Username</p>
                <a :href="'/dashboard/ticket'" class="btn btn-primary mt-3">Show</a>
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