<template>
    <div>
      <section v-if="house">
        <h2>{{ house.address }}</h2>
        <p>Sale Price: {{ house.sale_price }}</p>
        <p>Sale Date: {{ house.sale_date }}</p>
        <p>Owner: {{ house.owner }}</p>
        <p>Year Built: {{ house.year_built }}</p>
        <p>Square Feet: {{ house.square_feet }}</p>
      </section>
    </div>

</template>

<script>
import api from '../../services/api';
import Loader from './Loader';

export default {
  data() {
    return { 
      house: null
    };
  },
  
  created() {
    api.getHouseById(this.$route.params.id)
      .then(house => {
        this.house = house;
      });
  },
  components: {
    Loader
  },
};

</script>

<style scoped>
p {
  text-align: center !important;
  text-transform: uppercase;
}
section {
  margin-bottom: 200px;
}
h2 {text-align: center}
</style>
