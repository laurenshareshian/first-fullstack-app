<template>
<section>
  <h2>Portland Houses</h2>
  <p v-if="!houses">Loading houses...</p>
  <ul v-else class="list">
    <House
      v-for="(house, index) in houses"
      :key="index"
      :house="house"
    />
  </ul>
  <AddHouse :on-add="handleAdd"/>
</section>
</template>

<script>
import House from './House';
import AddHouse from './AddHouse.vue';
import api from '../../services/api';
export default {
  data() {
    return { 
      houses: null
    };
  },
  created() {
    api.getHouses()
      .then(houses => {
        this.houses = houses;
      });
  },
  components: { 
    House,
    AddHouse 
  },
  methods: {
    handleAdd(house) {
      return api.addHouse(house)
        .then(saved => {
          this.houses.push(saved);
        });
    }
  }
};
</script>

<style>
ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>