<template>
  <div class="container" id="app">
    <Result :counter="counter"/>
    <Counter @updated="counter += $event" />
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
}
}
</script>

<style>

</style>
