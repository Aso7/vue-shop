<template>
  <div id="app"> 
      <div class="box">
          <section>
            <router-view></router-view>
          </section> 
          <Index/>
      </div>     
  </div>
</template>

<script>
import Index from "./components/index"
export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
