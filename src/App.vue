<template>
  <div id="app" class="h-screen text-gray-500  flex">
    <sidebar />
    <pad />
  </div>
</template>
<script>
import "./assets/css/main.css";
import Sidebar from "./components/Sidebar";
import Pad from "./components/Pad";
export default {
  name: "App",
  components: {
    Sidebar,
    Pad
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
