<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h1 class="title mt-4 ml-4">All Tickets List</h1>
            <div class="form-group d-flex">
                <input type="text" class="form-control my-auto mr-3 input-xl border-primary" />
                <button class="btn my-auto mr-5 w-50">Search ...</button>
            </div>
            <button class="btn btn-danger black my-auto">Add New Ticket</button>
        </div>
        <div class="card-body">
            <div class="row">
                <div v-for="i in tickets" class="font-icon-list col-4">
                    <div id="cardBodyDetails">
                        <p class="h3 mb-2">{{ resizeText(i.title, "title") }}</p>
                        <div class="dflex">
                            <i class="fa fa-clock"></i>&nbsp;
                            <span>1402/09/26</span>
                        </div>
                        <i title="Lamp" class="text-white fa fa-lightbulb mt-3"></i>
                        <p></p>
                        <a href="#" class="btn btn-primary mt-3">Show</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tickets: [{
                    title: "testing the title"
                },
                {
                    title: "testing the title"
                },
                {
                    title: "testing the title"
                },
                {
                    title: "testing the title"
                },
                {
                    title: "testing the title"
                },
                {
                    title: "testing the title"
                },
                {
                    title: "testing the title"
                },
            ],
        };
    },
    methods: {
        resizeText(text) {
            return text.length >= 27 ? text.substr(0, 20) + "..." : text;
        },
    },
};
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