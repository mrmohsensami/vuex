<template>
  <div>
    <h3>
        Counter is: {{ counter }}
    </h3>
    <h3>
      double counter: {{ doubleCounter }}
    </h3>
  </div>
</template>
  
<script>
export default {
    // props: ['counter']
    computed: {
      counter() {
        return this.$store.state.counter;
      },
      doubleCounter() {
        return this.$store.getters.doubleCounter
      }
    }
}
</script>
  
<style>

</style>