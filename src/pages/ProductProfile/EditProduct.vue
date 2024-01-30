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
			class="form-control col-12 mb-5"
			:placeholder="newProductDescription"
		/>
		<div>
			<button class="btn ml-2" @click="triggerPicturePickerInput">
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
			imageUrl: null,
			newProductDescription: "",
			version: "",
			productId: "",
			productDescription: "",
			productName: "",
		};
	},
	mounted() {
		this.productId = localStorage.getItem("productId");
		this.productDescription = localStorage.getItem("currentProductDescription");
		axios.get(`/product/${this.productId}`).then((res) => {
			this.version = res.data.version;
			this.productName = res.data.productName;
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

			axios.post("/s3/pre-sign", {
				bucketName: "ticket",
				objectName: "product-" + this.productName,
			});
		},
		updateProduct() {
			axios
				.post(`/product/${this.productId}/update`, {
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
