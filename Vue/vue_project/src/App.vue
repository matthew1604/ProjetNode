<template>
  <div id="app">
    <Header title="Blog"/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import 'es6-promise/auto'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
