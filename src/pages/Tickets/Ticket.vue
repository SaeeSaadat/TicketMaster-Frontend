<template>
    <div>
        <card class="mx-auto" style="width:40%;">
            <p>Id: 123085132468152391981324198ifud665234986123413212349182340189</p>
            <p>Time: 12304981230946102397461023</p>
    
            <h1 class="title mt-3 text-center">Title of the Ticket</h1>
            <p>description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente vero incidunt blanditiis odit quisquam doloremque atque aperiam modi dicta quaerat magni consectetur deleniti repudiandae, nisi iusto vel commodi in odio.</p>
    
            <div class="d-flex justify-content-between">
                <card class="w-25">text</card>
                <card class="w-25">asdfa</card>
                <card class="w-25">sdf</card>
            </div>
            hello
        </card>
    </div>
</template>

<script>
import ProfileForm from '@/components/Profile/ProfileForm.vue';
import UserCard from '@/components/Profile/UserCard.vue'
export default {
    components: {
        ProfileForm,
        UserCard
    },
    data() {
        return {
            model: {
                company: 'Creative Code Inc.',
                email: 'mike@email.com',
                username: 'michael23',
                firstName: 'Mike',
                lastName: 'Andrew',
                address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
                city: 'Melbourne',
                country: 'Australia',
                about: 'Lamborghini Mercy, Your chick she so thirsty, I\'m in that two seat Lambo.'
            },
            user: {
                fullName: 'Mike Andrew',
                title: 'Ceo/Co-Founder',
                description: `Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...`,
            }
        }
    }
}
</script>