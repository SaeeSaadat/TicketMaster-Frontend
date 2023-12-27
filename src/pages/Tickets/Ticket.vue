<template>
    <div>
        <card class="w-75 mx-auto text-center">
            <h1>A Testing Ticket For ASD</h1>
            <h4>1402/09/30 18:55 By Bardia</h4>
            <h2>Status: Open/Closed/Pending/Needs Answer</h2>
            <div class="row text-center mx-auto">
                <card class="mr-5 ml-4" style="width:60%;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tempora consequatur! Tenetur vero dolorem iusto cupiditate officia omnis mollitia quo dicta vel unde praesentium debitis repellat, ab nesciunt maxime numquam? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Amet quo a provident, iure ducimus molestiae, reprehenderit voluptatibus dignissimos quam nam, ullam laudantium dolorem fugit. Minus, dolore dicta. Nihil, quia voluptatum! Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Id ducimus culpa corporis necessitatibus incidunt, obcaecati ad numquam ut animi totam consequatur nemo est, atque mollitia ipsum minima dolore? Cupiditate, enim!
                </card>
                <div class="dflex flex-column" style="width:30%;">
                    <card style="height: 380px; overflow-y: auto;">
                        <p class="mb-4">ChatBox</p>
                        <p class="text-left text-primary">Hello What Can i do for you?</p>
                        <p class="text-right text-info">Hello I want to check my connection.</p>
                        <p class="text-left text-primary">Hello What Can i do for you?</p>
                        <p class="text-right text-info">Hello I want to check my connection.</p>
                        <p class="text-left text-primary">Hello What Can i do for you?</p>
                        <p class="text-right text-info">Hello I want to check my connection.</p>
                        <p class="text-left text-primary">Hello What Can i do for you?</p>
                        <p class="text-right text-info">Hello I want to check my connection.</p>
                        <p class="text-left text-primary">Hello What Can i do for you?</p>
                        <p class="text-right text-info">Hello I want to check my connection.</p>
                        <p class="text-left text-primary">Hello What Can i do for you?</p>
                        <p class="text-right text-info">Hello I want to check my connection.</p>
                        <p class="text-left text-primary">Hello What Can i do for you?</p>
                        <p class="text-right text-info">Hello I want to check my connection.</p>
                    </card>
                    <div class="dflex row justify-content-center">
                        <customed-textarea customedTextareaClass="form-control" class="mr-3" v-model="text" placeholder="Enter Your Text Here ..."/>
                        <button @click="sendText" class="btn btn-primary h-50 my-auto"><i class="fa fa-send"></i></button>
                    </div>
    
                </div>
            </div>
        </card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: ""
        }
    },
    methods: {
        sendText() {
            //Todo: write send text to backend
            text = ""
        }
    }
}
</script>