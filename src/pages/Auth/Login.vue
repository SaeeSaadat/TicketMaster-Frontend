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
            <button @click="Login" class="btn btn-primary mr-5">
                <div v-if="!loading">Login</div>
                <div v-else><i class="fa fa-spinner fa-spin"></i>Loading</div>
              </button>
            <a href="/signup">Create New Account</a>
        </card>
    </div>
</template>


<script>
import axios from "axios";
import { CheckEmptyInputs, StoreCurrentUserData, HandleLoginError } from "./loginFunctions";
import CustomedInput from "@/components/Customs/CustomedInput.vue";
export default {
    components: {
        CustomedInput,
    },
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

            const inputsError = CheckEmptyInputs(this.username, this.password);

            if (inputsError) {
                this.loading = false;
                this.$toast.error(inputsError);
            } else {
                axios
                    .post("/auth/login", {
                        username: this.username,
                        password: this.password,
                    })
                    .then((res) => {
                        this.loading = false;

                        StoreCurrentUserData(
                            res.data.id,
                            res.data.username,
                            res.data.type,
                            this.$store.state
                        );

                        this.$toast.success("Login Successfully!");

                        setTimeout(() => {
                            this.$router.push("/dashboard");
                        }, 1000);
                    })
                    .catch((error) => {
                        const message = HandleLoginError(error);
                        this.$toast.error(message);
                    });
            }
        },
    },
};
</script>