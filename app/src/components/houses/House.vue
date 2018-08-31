<template>
  <li>
    <router-link :to="`/houses/${house.id}`">
    <div class="title-bg">
      <h3>{{shortenedAddress}}</h3>
      <p> {{house.sale_price}}</p>
    </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['house'],
  computed: {
    shortenedAddress() {
      return this.house.address.substring(0, 30);
    },
    price() {
      return this.house.sale_price > 600000 ? 'expensive!' : '';
    }
  }
};

</script>
<style scoped>
li {
  list-style: none;
  text-align: center;
  position: relative;
}
h3{
  font-family:'Playfair Display';
  font-size:25px;
  letter-spacing: 1px;
  color:white;
  margin-bottom:0;
  text-transform: none;
}
p {
  margin-top: 15px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center !important;
}
.title-bg {
  background: black;
  color:white;
  position: absolute;     
  text-align: center;  
  padding: 0px 20px 10px 20px;  
  bottom: 0px; 
  width: 100%;
}


</style>