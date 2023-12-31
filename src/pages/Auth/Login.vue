<template style="background-color: #1E1D2E;">
    <div class="w-25 mx-auto my-auto">
        <h1 class="mt-5 text-center mb-5" style="font-size: 80px">TicketMaster</h1>
        <card class="py-4 px-4 mt-5">
            <h5 class="title mb-5 ml-auto h1">Login</h5>
            <div class="row mb-4">
                <customed-input customedLabelClass="text-white" customedDivClass="col-12" label="Username :" placeholder="Please Enter Your Username ..." v-model="username" />
            </div>
            <div class="row mb-5">
                <customed-input type="password" customedLabelClass="text-white" customedDivClass="col-12" label="Password :" placeholder="Please Enter Your Password ..." v-model="password" />
            </div>
            <button @click="Login" :disabled="!username || !password" class="btn btn-primary mr-5">
                    <div v-if="!loading">Login</div>
                    <div v-else><i class="fa fa-spinner fa-spin"></i>Loading</div>
                  </button>
            <a href="/signup">Create New Account</a>
        </card>
    </div>
</template>


<script>
import axios from "axios";
import { StoreCurrentUserData, HandleLoginError } from "./loginFunctions.js";
export default {
    data() {
        return {
            username: "",
            password: "",
            loading: false,
        };
    },
    methods: {
        Login() {
            this.loading = true;
            axios
                .post("/auth/login", {
                    username: this.username,
                    password: this.password,
                })
                .then((res) => {
                    this.loading = false;

                    StoreCurrentUserData(
                        res.data.userId,
                        res.data.username,
                        res.data.role,
                        this.$store
                    );

                    this.$toast.success("Login Successfully!");

                    setTimeout(() => {
                        this.$router.push("/dashboard");
                    }, 500);
                })
                .catch((error) => {
                    this.loading = false
                    const message = HandleLoginError(error);
                    this.$toast.error(message);
                });
        },
    },
};
</script>