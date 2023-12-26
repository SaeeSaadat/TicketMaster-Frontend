<template>
    <card type="user" class="mx-auto mt-4" style="width:45%;">
        <div class="author mb-5 w-100">
            <h1>Register My Product</h1>
            <div class="row mb-3">
                <customed-input class="mx-auto" customedDivClass="col-9" placeholder="Please Enter Your business Name ..." v-model="businessName" />
            </div>
            <customed-textarea customedTextareaClass="form-control" placeholder="Please Write a Brief Description of Your Business ..." v-model="businessDescription" /> A place TO Upload Image
        </div>
        <button @click="registerNewProduct" class="btn btn-primary w-100">Register Product</button>
    </card>
</template>

<script>
export default {
    data() {
        return {
            businessName: "",
            businessDescription: ""
        }
    },
    methods: {
        registerNewProduct() {

        }
    }
}
</script>