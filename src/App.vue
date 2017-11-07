<template>
  <div id="app">

    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/crud'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
.btn {
  margin-left: 10px;
}
</style>
