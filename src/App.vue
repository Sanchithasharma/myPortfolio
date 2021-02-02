<template>
  <div id="app">
    <HelloWorld />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rokkitt:wght@300&display=swap");

#app {
  font-family: Rokkitt;
}
</style>
