<template style="background-color: #1e1d2e">
	<div class="w-25 mx-auto my-auto">
		<h1 class="mt-5 text-center mb-5" style="font-size: 80px">TicketMaster</h1>
		<card class="py-4 px-4 mt-5">
			<h5 class="title mb-5 ml-auto h1">Login</h5>
			<div class="row mb-4">
				<customed-input
					customedLabelClass="text-white"
					customedDivClass="col-12"
					label="Username :"
					placeholder="Please Enter Your Username ..."
					v-model="username"
				/>
			</div>
			<div class="row mb-5">
				<customed-input
					type="password"
					customedLabelClass="text-white"
					customedDivClass="col-12"
					label="Password :"
					placeholder="Please Enter Your Password ..."
					v-model="password"
				/>
			</div>
			<button
				@click="Login"
				:disabled="!username || !password"
				class="btn btn-primary mr-5"
			>
				<div v-if="!loading">Login</div>
				<div v-else><i class="fa fa-spinner fa-spin"></i>&nbsp;Loading</div>
			</button>
			<router-link to="/signup">Create New Account</router-link>
		</card>
	</div>
</template>

<script>
import axios from "axios";
import HandleLogin from "@/functions/Auth/loginFunctions.js";
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
			try {
				HandleLogin(
					this.username,
					this.password,
					this.loading,
					this.$toast,
					this.$router
				);
			} catch (error) {
				
			}
		},
	},
};
</script>
