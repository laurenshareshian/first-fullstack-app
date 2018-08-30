<template id="house-form">

    <form @submit.prevent="handleUpdate">
      <label>
        Address
        <input type="text" name="address" placeholder="Address"
          v-model="address">
      </label>

      <label>
        Sale Price:
        <input type="text" name="sale-price" placeholder="Sale Price"
          v-model="sale_price">
      </label>

      <label>
      Sale Date MM/DD/YYYY:
        <input type="text" name="sale-date" placeholder="Sale Date"
          v-model="sale_date">
      </label>


      <label>
        Square Feet:
        <input type="text" name="square-feet" placeholder="Square Feet"
          v-model="square_feet">
      </label>

      <label>
        Year Built:
        <input type="text" name="year-built" placeholder="Year Built"
          v-model="year_built">
      </label>

      <label>
        Owner:
        <input type="text" name="owner" placeholder="Owner"
          v-model="owner">
      </label>
      
      <label>
        <button type="submit">Edit</button>
      </label>
    </form>

</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      address: '',
      sale_price: '',
      sale_date: '',
      square_feet: '',
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
        this.address = this.house.address;
        this.sale_price = this.house.sale_price;
        this.sale_date = this.house.sale_date;
        this.square_feet = this.house.square_feet;
        this.year_built = this.house.year_built;
        this.owner = this.house.owner;
        this.property_id = this.house.property_id;
        this.id = this.house.id;
      });
  },
  methods: {
    handleUpdate() {
      const house = {
        id: this.id,
        address: this.address,
        sale_price: this.sale_price,
        sale_date: this.sale_date,
        square_feet: this.square_feet,
        year_built: this.year_built,
        owner: this.owner,
        property_id: this.property_id
      };
      api.updateHouse(house, this.$route.params.id);
      this.$router.push(`/houses/${this.$route.params.id}`);
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