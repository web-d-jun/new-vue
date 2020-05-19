<template>
  <div id="app">
      <button @click="increment">
        count is: {{state.count}} double is : {{state.double}}
      </button>
      
  </div>
</template>

<script lang="ts">
import {reactive, computed} from 'vue'
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    const increment = () => {
        state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
