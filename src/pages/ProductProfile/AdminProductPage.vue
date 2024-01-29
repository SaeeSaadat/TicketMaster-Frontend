<template>
	<div>
		<card type="user" class="mx-auto mt-4 mb-5" style="width: 45%">
			<div class="author mb-5 w-100">
				<img class="mb-5" :src="myProductPicture" alt="..." />

				<h3 class="title mb-3">{{ myProductTitle }}</h3>

				<p class="description">{{ myProductDescription }}</p>
			</div>

			<router-link to="dashboard/editProduct" class="btn btn-primary w-100"
				>Edit</router-link
			>
		</card>
	</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            myProductPicture: "",
            myProductTitle: "",
            myProductDescription: "",
            myProductId: localStorage.getItem("productId")
        }
    },
    mounted: {
        axios.get(`/product/${this.myProductId}`).then((res) => {
            myProductPicture = res.data.imageId
            myProductTitle = res.data.name
            myProductDescription = res.data.description
        })
    }
}
</script>
