<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <div class="form-group d-flex mt-4">
                <input type="text" class="form-control my-auto mr-3 input-xl border-primary" />
                <button class="btn my-auto mr-5 w-50">Search ...</button>
            </div>
        </div>
        <div class="card-body">
            <user-tickets :tickets="tickets" />
        </div>
    </div>
</template>

<script>
import UserTickets from "@/components/UserTickets.vue";
export default {
    components: {
        UserTickets,
    },
    data() {
        return {
            tickets: [{
                id: 1,
                title: "testing the title",
            },
            {
                id: 1,
                title: "testing the title",
            },
            {
                id: 1,
                title: "testing the title",
            },
            {
                id: 1,
                title: "testing the title",
            },
            {
                id: 1,
                title: "testing the title",
            },
            {
                id: 1,
                title: "testing the title",
            }],
        };
    },
    computed:{
        role(){
            const role = localStorage.getItem('role')
            return role == 'null' ? '' : role;
        }
    }
};
</script>
