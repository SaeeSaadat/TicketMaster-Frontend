<template>
    <div class="row">
        <div class="col-md-4 mx-auto">
            <card type="user">
                <p class="card-text"></p>
                <div class="author">
                    <div class="block block-one"></div>
                    <div class="block block-two"></div>
                    <div class="block block-three"></div>
                    <div class="block block-four"></div>
                    <a href="#">
                <img
                  class="mb-5"
                  src="https://fastly.picsum.photos/id/450/200/300.jpg?hmac=EAnz3Z3i5qXfaz54l0aegp_-5oN4HTwiZG828ZGD7GM"
                  alt="..."
                />
                <h3 class="title">username</h3>
              </a>
                    <p class="description">
                         (admin/user)
                    </p>
                </div>
                <p></p>
                <p class="card-description">
                    Edit
                </p>
            </card>
        </div>
    </div>
</template>

<script>
import ProfileForm from "@/components/Profile/ProfileForm.vue";
import UserCard from "@/components/Profile/UserCard.vue";
export default {
    components: {
        ProfileForm,
        UserCard,
    }
};
</script>