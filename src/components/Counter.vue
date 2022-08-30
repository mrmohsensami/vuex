<template>
    <div>
        <a class="btn btn-success" @click="increment">Increase</a>
        <a class="btn btn-success" @click="decrement">Decrease</a>
    </div>
</template>
  
<script>
import { mapActions } from "vuex";
export default {
    data() {},
    methods: {
        ...mapActions(['increment', 'decrement'])
        // increase() {
        // //   this.$emit('updated', +1)
        //     this.$store.state.counter ++
        // },
        // decrease() {
        // //   this.$emit('updated', -1)
        //     this.$store.state.counter --
        // },
    }
}
</script>
  
<style>
  
</style>