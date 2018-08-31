
<template>
<section>
  <h2>Add a new house</h2>
  <HouseForm 
    label="Add"
    :onEdit="handleAdd"/>
</section>
</template>

<script>
import HouseForm from './HouseForm.vue';
import api from '../../services/api';

export default {
  components: { 
    HouseForm 
  },
  props: {
    quadrants: Array
  },
  methods: {
    handleAdd(house) {
      return api.addHouse(house)
        .then(added => {
          this.$router.push(`/houses/${added.id}`);
        });
    }
  }
};
</script>

<style scoped>



</style>