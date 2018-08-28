<template id="house-template">
  <li class="house-profile">
    <h3>{{ house.address }}</h3>
    <p>Sale Date: {{ house.sale_date }}</p>
    <p>Square Feet: {{ house.square_feet }}</p>
    <p>Year Built: {{ house.year_built }}</p>
    <p>Owner: {{ house.owner }}</p>
    <p>Sale Price: {{ house.sale_price }}</p>
    <p class="sale-price">
      <span class="size">(<em>{{ size }}</em> house)</span>
    </p>
  </li>
</template>

<script>
export default {
  props: ['house'],
  computed: {
    population() {
      return this.house.population.toLocaleString();
    },
    size() {
      return this.house.sale_price > 600000 ? 'an expensive' : 'a reasonably priced';
    }
  }
};
</script>

<style scoped>
/* h3 {
  margin: 40px 0 0;
} */

.house-profile { 
  width: 240px;
  background-color: white;
  padding: 20px;
  border: solid 15px black;
  margin-right:15px;
  margin-top: 15px;
}

button {
  color:#100f14b0;
  background: none;
  border: none;
  padding: 0;
  margin:0;
  font-size: 13px;
}
</style>