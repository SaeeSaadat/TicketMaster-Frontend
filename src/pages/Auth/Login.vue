<template>
    <div class="form-group w-25 mx-auto my-auto" style="background-color: #1E1D2E;">
        <card class="py-4 px-4" style="margin-top:250px;">
            <h5 class="title mb-5 ml-auto h1">Login</h5>
            <div class="row mb-4">
                <customed-input customedLabelClass="text-white" customedDivClass="col-12" label="Username :" placeholder="Please Enter Your Username ..." v-model="username" />
            </div>
            <div class="row mb-5">
                <customed-input type="password" customedLabelClass="text-white" customedDivClass="col-12" label="Password :" placeholder="Please Enter Your Password ..." v-model="password" />
            </div>
            <button class="btn btn-primary mr-5">Login</button>
            <a href="/signup">Create New Account</a>
        </card>
    </div>
</template>


<script>
import CustomedInput from '@/components/Inputs/CustomedInput.vue';
export default {
    components: {
        CustomedInput,
    },
    data() {
        return {
            username: "",
            password: ""
        };
    },
};
</script>
