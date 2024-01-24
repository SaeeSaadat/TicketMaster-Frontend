<template>
    <card type="user" class="mx-auto mt-4 w-50">
        <div class="row mb-4">
            <customed-input customedDivClass="col-6 w-50" label="Product Id" placeholder="" :disabled="true" />
            <customed-input customedDivClass="col-6" label="New Name" placeholder="" />
        </div>
        <customed-textarea customedTextareaClass="form-control col-12" placeholder="Please Write a Brief Description of Your Business ..." />
        <div>
            <button class="btn btn-info" @click="triggerPicturePickerInput">Upload profile picture</button>
            <input type="file" class="d-none" ref="fileInput" accept="image/*" @change="handlePickedFile" />
        </div>
        <button class="btn btn-primary">Save</button>
    </card>
</template>

<script>
export default {
    data(){
        return{
            imageUrl:""
        }
    },
    methods: {
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