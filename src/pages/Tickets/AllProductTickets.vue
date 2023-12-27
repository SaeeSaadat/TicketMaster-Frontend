<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <div class="form-group d-flex mt-4">
                <input type="text" class="form-control my-auto mr-3 input-xl border-primary" />
                <button class="btn my-auto mr-5 w-50">Search ...</button>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div v-for="i in tickets" class="font-icon-list col-4">
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
                        <p>Username</p>
                        <a :href="'/dashboard/ticket'" class="btn btn-primary mt-3">Show</a>
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
                    id: 1,
                    title: "testing the title"
                },
                {
                    id: 2,
                    title: "testing the title"
                },
                {
                    id: 3,
                    title: "testing the title"
                },
                {
                    id: 4,
                    title: "testing the title"
                },
                {
                    id: 5,
                    title: "testing the title"
                },
                {
                    id: 6,
                    title: "testing the title"
                },
                {
                    id: 7,
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