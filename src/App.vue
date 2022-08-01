<template>
    <div id="app">
        <frozen/>
        <navbar/>
        <div>&nbsp;</div>
        <router-view :key="$route.fullPath" class="content"/>
        <customfooter/>
    </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import customfooter from "@/components/footer.vue";
import frozen from "@/components/frozen.vue";

export default {
    name: "App",
    components: {
        navbar,
        customfooter,
        frozen
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

/*
Bulma Related CSS Additions Below

GitHub Issue: https://github.com/jgthms/bulma/pull/1596#issuecomment-556416927
When this gets merged this should be able to be deleted.
*/
.card.is-horizontal {
  flex-direction: row;
  display: flex;
  flex-basis: 50ex;
  flex-grow: 0;
  flex-shrink: 1;
  box-shadow: none;
}

.card.is-horizontal .card-image {
  align-self: center;
}

.card.is-horizontal .image {
  min-height: 100%;
}

.card.is-horizontal .card-content {
  flex: 1;
}

.card.is-horizontal .card-content {
  padding-left: 1em;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 0.8em;
}

.card.is-horizontal {
  ul {
    list-style: none;
    margin: 0;
  }

  .is-divider {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
}
/* Bulma Related CSS Additions Ends */
</style>
