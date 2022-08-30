<template>
  <div class="container" id="app">
    <Result :counter="counter"/>
    <Counter @updated="counter += $event" />
    <hr>
    <input class="form-control" type="text" v-model="name">
    <p>{{ name }}</p>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  data() {
    return {
      counter: 0
    }
  },
  components: {
    Counter,
    Result
  },
  computed: {
    name: {
      get() {
        return this.$store.getters.getName;
      },
      set(value) {
        this.$store.commit('changeName', value)
      }
    }
  }
}
</script>

<style>

</style>
