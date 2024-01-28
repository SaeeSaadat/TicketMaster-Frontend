<template>
  <div>
    <card class="w-50 mx-auto">
      <p class="h1 text-center mt-3">{{productTitle}}adfasdfasdfas</p>
      <customed-input customedDivClass="col-8 mb-4" customedLabelClass="text-white" label="Ticket Title:" placeholder="Please enter the title of ticket you want to submit ..." v-model="ticketTitle" />
      <customed-textarea customedTextareaClass="form-control w-75 mx-auto" placeholder="Please Write a Brief Description of Your Business ..." v-model="businessDescription" />
      <button class="btn btn-primary w-100 mx-auto">Submit Ticket</button>
    </card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ticketTitle:"",
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$route.params.ticketType);
    const createdTime = new Date()
  },
  computed:{
    productTitle(){
      return localStorage.getItem("thisProductTitle")
    }
  }
};
</script>