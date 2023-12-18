<template style="background-color: #1E1D2E;">
    <div class="w-25 mx-auto my-auto">
        <h1 class="mt-5 text-center mb-5" style="font-size:80px;">TicketMaster</h1>
        <card class="py-4 px-4 mt-5">
            <h5 class="title mb-5 ml-auto h1">Signup</h5>
            <div class="row mb-4">
                <customed-input customedLabelClass="text-white" customedDivClass="col-12" label="Username :" placeholder="Please Choose a Username ..." v-model="username" />
            </div>
            <div class="row mb-4">
                <customed-input customedLabelClass="text-white" customedDivClass="col-12" label="Password :" placeholder="Please Choose a Password ..." v-model="password" type="password" />
            </div>
            <div class="row mb-5">
                <customed-input customedLabelClass="text-white" customedDivClass="col-12" label="reEnter Password :" placeholder="Please reEnter Your Password ..." v-model="rePassword" type="password" />
            </div>
            <button @click="Signup" class="btn btn-primary mr-5">SignUp</button>
            <a href="/login">Already have an Account!</a>
        </card>
    </div>
</template>

<script>
import axios from "axios"
import CustomedInput from '@/components/Customs/Inputs/CustomedInput.vue';
export default {
    components: {
        CustomedInput,
    },
    data() {
        return {
            username: "",
            password: "",
            rePassword: ""
        };
    },
    methods: {
        Signup() {
            if (!this.username)
                this.$toast.error("please enter a username ...");
            else if (!this.password)
                this.$toast.error("please enter a password ...");
            else if (!this.rePassword)
                this.$toast.error("please re-enter your password...");
            else {
                // checkEmptyInputs()
                // validatePassword()
                axios.post("/auth/register", {
                    username: this.username,
                    password: this.password
                }).then(() => {
                    setTimeout(() => {
                        this.$toast.success('Registered Successfully!');
                    }, 2000);
                    this.$router.push("/login")
                }).catch(() => {
                    this.$toast.error('Something Went Wrong ...');
                })
            }
        },
    }
};
</script>
