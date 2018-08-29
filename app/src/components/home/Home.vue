<template>
  <main>
    <div class="welcome">

      <h1>Housing Search</h1>
      <button> <router-link to="/houses">Houses</router-link> </button>
    </div>

  </main>
</template>

<script>
</script>

<style scoped>
main {
  background-image: url("/home_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 200px;
 
}
.welcome{
  text-align:center;
}
h1 {
  font-size: 70px;
  color: white;
  margin: 0;
}
h3 {
  font-family: 'Open Sans';
  color: white;
  line-height: 21px;
  font-weight: 300;
  margin-bottom: 30px;
  letter-spacing: 1.5px;
  font-size: 18px;
  text-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
}
button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
}
button:hover {
    transform: scale(1.1); 
}

</style>