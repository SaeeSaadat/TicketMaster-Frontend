<template>
    <div>
        <card type="user" class="mx-auto mt-4 mb-5" style="width:45%;">
            <div class="author mb-5 w-100">
                <img class="mb-5" :src="thisProductPicture" alt="..." />
                <h3 class="title mb-3">{{thisProductTitle}}</h3>
                <p class="description">{{thisProductDescription}}</p>
                <div class="row justify-content-center mt-4">
                    <button class="btn mr-4"><i class="fa fa-info"></i></button>
                    <button class="btn mr-4"><i class="fa fa-question"></i></button>
                    <button class="btn"><i class="fa fa-bug"></i></button>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
import { SaveThisProductDataInLocalStorage } from "./UniqueProductPageFunctions"
export default {
    mounted() {
        console.log(this.$route.params.id);
        SaveThisProductDataInLocalStorage(this.thisProductTitle, this.thisProductDescription, this.thisProductPicture)
    },
    computed: {
        thisProductTitle() {
            return localStorage.getItem("thisProductTitle")
        },
        thisProductDescription() {
            return localStorage.getItem("thisProductDescription")
        },
        thisProductPicture() {
            return localStorage.getItem("thisProductPicture")
        }
    }
}
</script>