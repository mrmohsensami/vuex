<template>
    <div>
      <a class="btn btn-success" @click="increase">Increase</a>
      <a class="btn btn-success" @click="decrease">Decrease</a>
    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              
          }
      },
      methods: {
          increase() {
            //   this.$emit('updated', +1)
              this.$store.state.counter ++
          },
          decrease() {
            //   this.$emit('updated', -1)
              this.$store.state.counter --
          },
      }
  }
  </script>
  
  <style>
  
  </style>