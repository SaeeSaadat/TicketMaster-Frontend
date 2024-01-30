<template>
	<div>
		<card type="user" class="mx-auto mt-4 mb-5" style="width: 45%">
			<div class="author mb-5 w-100">
				<img class="mb-5" :src="thisProductPicture" alt="..." />
				<h3 class="title mb-3">{{ thisProductTitle }}</h3>
				<p class="description">{{ thisProductDescription }}</p>
				<div class="row justify-content-center mt-4">
					<router-link
						:to="`/submitTicket/information`"
						class="btn btn-primary mr-4"
						title="information"
						><i class="fa fa-info"></i
					></router-link>
					<router-link
						:to="`/submitTicket/question`"
						class="btn mr-4"
						title="question"
						><i class="fa fa-question"></i
					></router-link>
					<router-link
						:to="`/submitTicket/bug`"
						class="btn btn-danger"
						title="bug"
						><i class="fa fa-bug"></i
					></router-link>
				</div>
			</div>
		</card>
	</div>
</template>

<script>
import { SaveThisProductDataInLocalStorage } from "@/functions/Product/UniqueProductPageFunctions";
import axios from "axios";
export default {
	data() {
		return {
			thisProductId: "",
			thisProductTitle: "",
			thisProductDescription: "",
			thisProductPicture: "",
		};
	},
	mounted() {
		this.thisProductId = this.$router.params.id;
		axios.get(`/product/${this.thisProductId}/view`).then((res) => {
			this.thisProductTitle = res.data.name;
			this.thisProductDescription = res.data.description;
			this.thisProductPicture = res.data.imageId;
		});
		SaveThisProductDataInLocalStorage(
			this.thisProductId,
			this.thisProductTitle,
			this.thisProductDescription,
			this.thisProductPicture
		);
	},
};
</script>
