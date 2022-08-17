<template>
  <div id="app">
   <!--  <nav>
      <router-link to="/">Home</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>
<script>

export default {


}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding: 20px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
header{
  padding: 0 0 20px 0;
  border-bottom: 1px solid #ccc;
  button{
    margin-right: 20px;
  }
}
</style>
