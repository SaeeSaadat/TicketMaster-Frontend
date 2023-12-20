<template>
    <card>
        <h5 class="title">Edit Profile</h5>
        <div class="row mb-3">
            <customed-input :inputValue="defaultValues.company" customedLabelClass="" customedDivClass="col-md-5 pr-md-1" label="Company (disabled)" placeholder="Company" v-model="form.company" :disabled="true" />
            <customed-input :inputValue="defaultValues.username" customedLabelClass="" customedDivClass="col-md-3 px-md-1" label="userName" placeholder="Username" v-model="form.username" />
            <customed-input :inputValue="defaultValues.email" customedLabelClass="" customedDivClass="col-md-4 pl-md-1" label="Email" placeholder="mike@email.com" v-model="form.email" />
        </div>
        <div class="row mb-3">
            <customed-input :inputValue="defaultValues.firstName" customedLabelClass="" customedDivClass="col-md-6 pr-md-1" label="firstName" placeholder="firstName" v-model="form.firstName" />
            <customed-input :inputValue="defaultValues.lastName" customedLabelClass="" customedDivClass="col-md-6 pl-md-1" label="lastName" placeholder="lastName" v-model="form.lastName" />
        </div>
        <div class="row mb-3">
            <customed-input :inputValue="defaultValues.address" customedLabelClass="" customedDivClass="col-md-12" label="Address" placeholder="HomeAdress" v-model="form.address" />
        </div>
        <div class="row mb-3">
            <customed-input :inputValue="defaultValues.city" customedLabelClass="" customedDivClass="col-md-4 pr-md-1" label="city" placeholder="city" v-model="form.city" />
            <customed-input :inputValue="defaultValues.country" customedLabelClass="" customedDivClass="col-md-4 px-md-1" label="country" placeholder="country" v-model="form.country" />
            <customed-input :inputValue="defaultValues.zipcode" customedLabelClass="" customedDivClass="col-md-4 pl-md-1" label="zipCode" placeholder="zipCode" v-model="form.zipCode" />
        </div>
        <div class="row mb-3">
            <customed-textarea customedLabelClass="" :textareaValue="defaultValues.about" :rows="4" :cols="80" label="about Me" customedDivClass="col-md-8" customedTextareaClass="form-control" placeholder="Here can be your description" />
        </div>
        <button class="btn btn-primary">Save</button>
    </card>
</template>

<script>
import CustomedInput from '@/components/Customs/Inputs/CustomedInput.vue';
import CustomedTextarea from "@/components/Customs/Inputs/CustomedTextarea.vue";
export default {
    props: {
        defaultValues: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
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
            },
        };
    },
};
</script>
