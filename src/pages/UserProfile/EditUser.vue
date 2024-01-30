<template>
	<card type="user" class="mx-auto mt-4 w-50">
		<div class="dflex gap-3">
			<div class="row mb-5">
				<customed-input
					customedDivClass="col-6"
					label="User Id"
					:placeholder="userId"
					:disabled="true"
				/>
				<button class="btn mx-auto mb-0" @click="triggerPicturePickerInput">
					upload new profile picture
				</button>
				<input
					type="file"
					class="d-none"
					ref="fileInput"
					accept="image/*"
					@change="handlePickedFile"
				/>
			</div>

			<div class="column mb-5">
				<customed-input
					type="password"
					customedDivClass="mb-3"
					label="Old Password"
					placeholder="Please Enter Your Old Password ..."
					v-model="oldPassword"
				/>
				<customed-input
					type="password"
					customedDivClass="mb-3"
					label="New Password"
					placeholder="Please Enter Your New Password ..."
					v-model="newPassword"
				/>
				<customed-input
					type="password"
					label="Confirm New Password"
					placeholder="Please Confirm Your New Password ..."
					v-model="newRePassword"
				/>
			</div>
		</div>
		<button class="btn btn-primary" @click="updateUserProfile">Save</button>
	</card>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			version: 0,
			imageUrl: null,
			oldPassword: null,
			newPassword: null,
			newRePassword: null,
		};
	},
	mounted() {
		axios.get("/profile").then((res) => {
			this.version = res.data.version;
		});
	},
	methods: {
		updateUserProfile() {
			axios
				.post("/profile/update", {
					version: this.version,
					profilePicture: this.imageUrl ? this.imageUrl : "",
					oldPassword: this.oldPassword,
					newPassword: this.newPassword,
					newPasswordConfirmation: this.newRePassword,
				})
				.then(() => {
					this.$toast.succes("Done...");
				})
				.catch(() => {
					this.$toast.error("Something went wrong");
				});
		},
		triggerPicturePickerInput() {
			this.$refs.fileInput.click();
		},
		handlePickedFile(event) {
			const file = event.target.files[0];
			const fileReader = new FileReader();

			fileReader.addEventListener("load", () => {
				this.imageUrl = fileReader.result;
			});

			fileReader.readAsDataURL(file);

			axios.post("/s3/pre-sign", {
				bucketName: "ticket",
				objectName: "user-" + this.userId,
			})
		},
	},
	computed: {
		userId() {
			return localStorage.getItem("userId");
		},
		username() {
			return localStorage.getItem("username");
		},
	},
};
</script>
