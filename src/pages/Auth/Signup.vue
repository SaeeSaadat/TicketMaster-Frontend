<template style="background-color: #1E1D2E;">
    <div class="w-25 mx-auto my-auto">
        <h1 class="mt-5 text-center mb-5" style="font-size: 80px">TicketMaster</h1>
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
            <button @click="Signup" :disabled="!username||!password||!rePassword" class="btn btn-primary mr-5">
                    <div v-if="!loading">SignUp</div>
                    <div v-else><i class="fa fa-spinner fa-spin"></i>Loading</div>
                </button>
            <router-link to="/login">Already have an Account!</router-link>
        </card>
    </div>
</template>

<script>
import axios from "axios";
import { validatePassword, HandleSignupError } from "./signupFunctions.js"
export default {
    data() {
        return {
            username: "",
            password: "",
            rePassword: "",
            loading: false,
        };
    },
    methods: {
        Signup() {
            this.loading = true;
            if (!validatePassword(this.password)) {
                this.loading = false
                this.$toast.error("Invalid Password !")
            } else {
                axios
                    .post("/auth/register", {
                        username: this.username,
                        password: this.password,
                    })
                    .then(() => {
                        this.$toast.success("Registered Successfully!");
                        this.loading = false;
                        setTimeout(() => {
                            this.$router.push("/login");
                        }, 1000);
                    })
                    .catch((error) => {
                        this.loading = false
                        const message = HandleSignupError(error)
                        this.$toast.error(message)
                    });
            }
        }

    },
}
</script>
