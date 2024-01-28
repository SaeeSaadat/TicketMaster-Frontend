<template>
  <div>
    
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$route.params.ticketType);
  },
};
</script>