<template>
    <card type="user">
        <p class="card-text">
        </p>
        <div class="author">
            <div class="block block-one"></div>
            <div class="block block-two"></div>
            <div class="block block-three"></div>
            <div class="block block-four"></div>
            <a href="#">
                <img class="avatar" src="https://fastly.picsum.photos/id/450/200/300.jpg?hmac=EAnz3Z3i5qXfaz54l0aegp_-5oN4HTwiZG828ZGD7GM" alt="...">
                <h5 class="title">{{user.fullName}}</h5>
            </a>
            <p class="description">
                {{user.title}}
            </p>
        </div>
        <p></p>
        <p class="card-description">
            {{user.description}}
        </p>
        <div slot="footer" class="button-container">
            <base-button icon round class="btn-facebook">
                <i class="fa fa-facebook"></i>
            </base-button>
            <base-button icon round class="btn-twitter">
                <i class="fa fa-twitter"></i>
            </base-button>
            <base-button icon round class="btn-google">
                <i class="fa fa-google-plus"></i>
            </base-button>
        </div>
    </card>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: () => {
                return {};
            }
        }
    }
}
</script>