<template>
    <card>
        <h5 class="title">Edit Profile</h5>
        <div class="row mb-3">
            <customed-input customedLabelClass="" customedInputClass="form-control" customedDivClass="col-md-5 pr-md-1" label="Company (disabled)" placeholder="Company" v-model="company" :disabled="true" />
            <customed-input customedLabelClass="" customedInputClass="form-control" customedDivClass="col-md-3 px-md-1" label="userName" placeholder="Username" v-model="username" />
            <customed-input customedLabelClass="" customedInputClass="form-control" customedDivClass="col-md-4 pl-md-1" label="Email" placeholder="mike@email.com" v-model="email" />
        </div>
        <div class="row mb-3">
            <customed-input customedLabelClass="" customedInputClass="form-control" customedDivClass="col-md-6 pr-md-1" label="firstName" placeholder="firstName" v-model="firstName" />
            <customed-input customedLabelClass="" customedInputClass="form-control" customedDivClass="col-md-6 pl-md-1" label="lastName" placeholder="lastName" v-model="lastName" />
        </div>
        <div class="row mb-3">
            <customed-input customedLabelClass="" customedInputClass="form-control" customedDivClass="col-md-12" label="Address" placeholder="HomeAdress" v-model="address" />
        </div>
        <div class="row mb-3">
            <customed-input customedLabelClass="" customedInputClass="form-control" customedDivClass="col-md-4 pr-md-1" label="city" placeholder="city" v-model="city" />
            <customed-input customedLabelClass="" customedInputClass="form-control" customedDivClass="col-md-4 px-md-1" label="country" placeholder="country" v-model="country" />
            <customed-input customedLabelClass="" customedInputClass="form-control" customedDivClass="col-md-4 pl-md-1" label="zipCode" placeholder="zipCode" v-model="zipCode" />
        </div>
        <div class="row mb-3">
            <customed-textarea customedLabelClass="" textareaValue="hello" :rows="4" :cols="80" label="about Me" customedDivClass="col-md-8" customedTextareaClass="form-control" placeholder="Here can be your description" v-model="profileForm.name" />
        </div>
        <base-button slot="footer" type="primary" fill>Save</base-button>
    </card>
</template>

<script>
import CustomedInput from '../Inputs/CustomedInput.vue';
import CustomedTextarea from "../Inputs/CustomedTextarea.vue";
export default {
    components: {
        CustomedTextarea,
        CustomedInput,
    },
    data() {
        return {
            profileForm: {
                company: "",
                username: "",
                email: "",
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                country: "",
                zipCode: "",
            },
        };
    },
};
</script>
