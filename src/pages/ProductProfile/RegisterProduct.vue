<template>
    <card type="user" class="mx-auto mt-4" style="width:45%;">
        <div class="author mb-5 w-100">
            <h1 class="mb-5">Register My Product</h1>
            <div class="row mb-5">
                <customed-input class="mx-auto" customedDivClass="col-9" placeholder="Please Enter Your business Name ..." v-model="businessName" />
            </div>
            <customed-textarea customedTextareaClass="form-control w-75 mx-auto" placeholder="Please Write a Brief Description of Your Business ..." v-model="businessDescription" />
            <div>
                <button class="btn mt-5" @click="triggerPicturePickerInput">Upload profile picture</button>
                <input type="file" class="d-none" ref="fileInput" accept="image/*" @change="handlePickedFile" />
            </div>
        </div>
        <button @click="registerNewProduct" class="btn btn-primary w-100">Register Product</button>
    </card>
</template>

<script>
export default {
    data() {
        return {
            businessName: "",
            businessDescription: "",
            imageUrl: ""
        }
    },
    methods: {
        registerNewProduct() {
            
        },
        triggerPicturePickerInput() {
            this.$refs.fileInput.click();
        },
        handlePickedFile(event) {
            const file = event.target.files[0];
            const fileReader = new FileReader();

            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result;
            })

            fileReader.readAsDataURL(file);
        }
    }
}
</script>