<template>
<section>
  <h2>Edit house</h2>
  <HouseForm 
    label="Edit"
    :house="house"
    :onEdit="handleEdit"/>
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
  data() {
    return {
      house: null,
      address: '',
      sale_price: '',
      sale_date: '',
      square_feet: '',
      market_value: '',
      year_built: '',
      owner: '',
      id: '',
      property_id: ''
    };
  },
  created() {
    api.getHouseById(this.$route.params.id)
      .then(house => {
        this.house = house;
        // this.address = this.house.address;
        // this.sale_price = this.house.sale_price;
        // this.sale_date = this.house.sale_date;
        // this.square_feet = this.house.square_feet;
        // this.market_value = this.house.market_value;
        // this.year_built = this.house.year_built;
        // this.owner = this.house.owner;
        // this.property_id = this.house.property_id;
        // this.id = this.house.id;
      });
  },
  methods: {
    handleEdit(house) {
      api.updateHouse(house, this.$route.params.id)
        .then(added => {
          this.$router.push(`/houses/${added.id}`);
        });
    }
  }
};
</script>


<style scoped>
form {
  background: white;
  padding: 30px;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
}
p {
  text-align: center;
  text-transform: uppercase;
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