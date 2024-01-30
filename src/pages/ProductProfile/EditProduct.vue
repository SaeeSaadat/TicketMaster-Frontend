<template>
	<card type="user" class="mx-auto mt-4 w-50">
		<div class="row mb-4">
			<customed-input
				customedDivClass="col-6 w-50"
				label="Product Id"
				:placeholder="productId"
				:disabled="true"
			/>
		</div>
		<textarea
			v-model="newProductDescription"
			class="form-control col-12"
			:placeholder="newProductDescription"
		/>
		<div>
			<button class="btn" @click="triggerPicturePickerInput">
				upload new product picture
			</button>

			<input
				type="file"
				class="d-none"
				ref="fileInput"
				accept="image/*"
				@change="handlePickedFile"
			/>
		</div>

		<button class="btn btn-primary" @click="updateProduct">Save</button>
	</card>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			imageUrl: "",
			newProductDescription: "",
			version: "",
			productId: "",
			productDescription: "",
		};
	},
	mounted() {
		this.productId = localStorage.getItem("productId");
		this.productDescription = localStorage.getItem("currentProductDescription");
		axios.get(`/product/${this.productId}`).then((res) => {
			this.version = res.data.version;
			this.newProductDescription = res.data.description;
		});
	},
	methods: {
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
		},
		updateProduct() {
			axios
				.put(`/product/${this.productId}`, {
					version: this.version,
					description: this.newProductDescription,
					imageId: !!this.imageUrl ? this.imageUrl : "",
				})
				.then(() => {
					this.$toast.succes("Done...");
				})
				.catch(() => {
					this.$toast.error("Something went wrong!");
				});
		},
	},
};
</script>
