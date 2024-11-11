<template>
  <Interface3D/>
  <AppFooter/>
</template>

<script>
import Interface3D from './components/Interface3D.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    Interface3D,
    AppFooter
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
