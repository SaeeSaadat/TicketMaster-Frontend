<template>
    <card>
        <h5 class="title">Edit Profile</h5>
        <div class="row mb-3" v-for="i in inputs" :key="i">
            <customed-input v-for="j in i" :key="j" :customedLabelClass="j.customedLabelClass" customedInputClass="form-control" :customedDivClass="j.customedDivClass" :label="j.label" :placeholder="j.placeholder" v-model="j.vModel" :disabled="j.disabled" />
        </div>
        <div class="row mb-3">
            <customed-input customedDivClass="col-md-5 pr-md-1" label="Company (disabled)" placeholder="Company" v-model="form.company" :disabled="true" />
            <customed-input customedDivClass="col-md-3 px-md-1" label="userName" placeholder="Username" v-model="form.username" />
            <customed-input customedDivClass="col-md-4 pl-md-1" label="Email" placeholder="mike@email.com" v-model="email" />
        </div>
        <div class="row mb-3">
            <customed-input customedDivClass="col-md-6 pr-md-1" label="firstName" placeholder="firstName" v-model="firstName" />
            <customed-input customedDivClass="col-md-6 pl-md-1" label="lastName" placeholder="lastName" v-model="lastName" />
        </div>
        <div class="row mb-3">
            <customed-input customedDivClass="col-md-12" label="Address" placeholder="HomeAdress" v-model="address" />
        </div>
        <div class="row mb-3">
            <customed-input customedDivClass="col-md-4 pr-md-1" label="city" placeholder="city" v-model="city" />
            <customed-input customedDivClass="col-md-4 px-md-1" label="country" placeholder="country" v-model="country" />
            <customed-input customedDivClass="col-md-4 pl-md-1" label="zipCode" placeholder="zipCode" v-model="zipCode" />
        </div>
        <div class="row mb-3">
            <customed-textarea customedLabelClass="" textareaValue="hello" :rows="4" :cols="80" label="about Me" customedDivClass="col-md-8" customedTextareaClass="form-control" placeholder="Here can be your description" v-model="form.name" />
        </div>
        <button class="btn btn-primary">Save</button>
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
            form: {
                company: "",
                username: "",
                email: "",
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                country: "",
                zipCode: "",
                name: "",
            },
            inputs: [
                [{
                    customedLabelClass: "",
                    customedInputClass: "form-control",
                    customedDivClass: "",
                    label: "",
                    placeholder: "",
                    vModel: "",
                    disabled: ""
                }, {
                    customedLabelClass: "",
                    customedInputClass: "form-control",
                    customedDivClass: "",
                    label: "",
                    placeholder: "",
                    vModel: "",
                    disabled: ""
                }, {
                    customedLabelClass: "",
                    customedInputClass: "form-control",
                    customedDivClass: "",
                    label: "",
                    placeholder: "",
                    vModel: "",
                    disabled: ""
                }],
                [{
                    customedLabelClass: "",
                    customedInputClass: "form-control",
                    customedDivClass: "",
                    label: "",
                    placeholder: "",
                    vModel: "",
                    disabled: ""
                }, {
                    customedLabelClass: "",
                    customedInputClass: "form-control",
                    customedDivClass: "",
                    label: "",
                    placeholder: "",
                    vModel: "",
                    disabled: ""
                }],
                [{
                    customedLabelClass: "",
                    customedInputClass: "form-control",
                    customedDivClass: "",
                    label: "",
                    placeholder: "",
                    vModel: "",
                    disabled: ""
                }],
                [{
                    customedLabelClass: "",
                    customedInputClass: "form-control",
                    customedDivClass: "",
                    label: "",
                    placeholder: "",
                    vModel: "",
                    disabled: ""
                }, {
                    customedLabelClass: "",
                    customedInputClass: "form-control",
                    customedDivClass: "",
                    label: "",
                    placeholder: "",
                    vModel: "",
                    disabled: ""
                }, {
                    customedLabelClass: "",
                    customedInputClass: "form-control",
                    customedDivClass: "",
                    label: "",
                    placeholder: "",
                    vModel: "",
                    disabled: ""
                }]
            ]
        };
    },
};
</script>
