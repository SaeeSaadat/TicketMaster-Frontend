<template>
    <card type="user" class="mx-auto mt-4 w-50">
        <div class="row mb-3">
            <customed-input customedDivClass="col-6 w-50" label="User Id" :placeholder="userId" :disabled="true" />
            <customed-input customedDivClass="col-6" label="Username" :placeholder="username" />
        </div>
        <div class="row mb-5">
            <customed-input customedDivClass="col-6" label="Password" placeholder="Please Enter Your New Password ..." />
            <customed-input customedDivClass="col-6" label="Confirm Password" placeholder="Please Re-Enter Your New Password ..." />
        </div>
        <button class="btn btn-primary">Save</button>
    </card>
</template>

<script>
export default {
    computed: {
        userId: () => {
            return localStorage.getItem("setUserId");
        },
        username: () => {
            return localStorage.getItem("username");
        },
    },
};
</script>