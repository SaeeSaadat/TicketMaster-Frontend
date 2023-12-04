<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h1 class="title mt-4 ml-4">All Tickets List</h1>
            <div class="form-group d-flex">
                <input type="text" class="form-control my-auto mr-3 input-xl border-primary" />
                <button class="btn my-auto mr-5 w-50">Search ...</button>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <a href="#" v-for="i in tickets" class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div id="cardBodyDetails">
                        <h2>Title:</h2>
                        <h4>{{ resizeText(i.title, "title") }}</h4>
                        <h2 class="mt-5">Description:</h2>
                        <h4 class="mx-2">{{ resizeText(i.description, "description") }}</h4>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tickets: [{
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
                {
                    title: "testing the title",
                    description: "Im testing the description part of the code which is foresting the desc part. i dont know what is wrong with it so i will text like lorem ipsum :)",
                },
            ],
        };
    },
    methods: {
        resizeText(text, type) {
            switch (type) {
                case "title":
                    return text.length >= 27 ? text.substr(0, 25) + "..." : text;
                case "description":
                    return text.length >= 27 ? text.substr(0, 55) + "..." : text;
            }
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