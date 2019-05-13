<template>
  <div class="container" id="app">
    <Header />
    <div class="page">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from "./components/Footer";
  import Header from "./components/Header";

export default {
  name: 'app',
    components: {
      Header,
      Footer
    },
}
</script>

<style>

</style>
