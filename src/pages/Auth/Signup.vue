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
            <button @click="Signup" class="btn btn-primary mr-5">
                                <div v-if="!loading">
                                    SignUp
                                </div>
                                <div v-else>
                                    <i class="fa fa-spinner fa-spin"></i>Loading
                                </div>
                            </button>
            <a href="/login">Already have an Account!</a>
        </card>
    </div>
</template>

<script>
import axios from "axios"
import CustomedInput from '@/components/Customs/CustomedInput.vue';
export default {
    components: {
        CustomedInput,
    },
    data() {
        return {
            username: "",
            password: "",
            rePassword: "",
            loading: false
        };
    },
    methods: {
        Signup() {
            this.loading = true
            if (!this.username) {
                this.$toast.error("please enter a username ...");
                this.loading = false
            } else if (!this.password) {
                this.$toast.error("please enter a password ...");
                this.loading = false
            } else if (!this.rePassword) {
                this.$toast.error("please re-enter your password...");
                this.loading = false
            } else {
                // checkEmptyInputs()
                // validatePassword()
                axios.post("/auth/register", {
                    username: this.username,
                    password: this.password
                }).then(() => {
                    this.$toast.success('Registered Successfully!');
                    this.loading = false
                    setTimeout(() => {
                        this.$router.push("/login")
                    }, 1000);
                }).catch(() => {
                    this.$toast.error('Something Went Wrong ...');
                    this.loading = false
                })
            }
        },
    }
};
</script>
