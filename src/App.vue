<template>
  <div id="app">
    <navbar/>
    <div>&nbsp;</div>
    <router-view class="content"/>
    <customfooter/>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import customfooter from "@/components/footer.vue";

export default {
    name: "App",
    components: {
        navbar,
        customfooter
    }
}
</script>

<style>
html body #app {
    min-width: 100vw;
    min-height: 100vh;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;

    background-image: url("/squares.png")
}

.content {
    flex: 1;
}
</style>
