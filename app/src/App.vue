<template>
  <div class="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/houses">Houses</router-link>
      </nav>
    </header>

    <router-view></router-view>

    <footer> 
      <img class="heart-image" :src="('/made-with-love.png')" />
      <p> Made @ alchemy code lab PDX</p>
      <p> Powered by portlandmaps.com</p>
    </footer>
    
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>

footer p {
  text-align: center !important;
}

</style>