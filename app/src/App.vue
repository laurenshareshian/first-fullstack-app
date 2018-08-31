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
a {
    font-family: 'Open Sans';
    text-decoration: none;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 40px;
    padding:5px;
    color: white;
  }
</style>