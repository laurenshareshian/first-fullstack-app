<template id="house-form">

    <form @submit.prevent="handleSubmit">
      <label>
        Address
        <input type="text" name="address" placeholder="Address" required
          v-model="house.address">
      </label>

      <!-- <label>
        Quadrant
        <input type="text" name="quadrant" placeholder="Quadrant" required
          v-model="house.quadrantId">
      </label> -->

      <label>
        Quadrant:<br>
        <select v-model.number="house.quadrantId" required>
          <option disabled value="">Please select a quadrant</option>
          <option
            v-for="quadrant in quadrants"
            :key="quadrant.id"
            :value="quadrant.id">
            {{quadrant.name}} ({{quadrant.direction}})
          </option>
        </select>
        <br>
      </label>

      <label>
        Sale Price:
        <input type="text" name="sale-price" placeholder="Sale Price" required
          v-model="house.sale_price">
      </label>

      <label>
      Sale Date MM/DD/YYYY:
        <input type="text" name="sale-date" placeholder="Sale Date" required
          v-model="house.sale_date">
      </label>

      <label>
        Square Feet:
        <input type="text" name="square-feet" placeholder="Square Feet" required
          v-model="house.square_feet">
      </label>

      <label>
        Market value:
        <input type="text" name="market-value" placeholder="Market value"
          v-model="house.market_value">
      </label>

      <label>
        Year Built:
        <input type="text" name="year-built" placeholder="Year Built" required
          v-model="house.year_built">
      </label>

      <label>
        Owner:
        <input type="text" name="owner" placeholder="Owner" required
          v-model="house.owner">
      </label>
      
      <label>
        <button type="submit">Add</button>
      </label>
    </form>

</template>

<script>

import shortid from 'shortid';
import api from '../../services/api';

const initHouse = () => {
  return {
    address: '',
    quadrantId: '',
    sale_price: '',
    sale_date: '',
    square_feet: '',
    market_value: '',
    year_built: '',
    owner: '',
    property_id: shortid.generate()
  };
};
export default {

  props: {
    onAdd: {
      type: Function,
    }
  },
  data() {
    return {
      house: initHouse(),      
      quadrants: null

    };
  },
  created() {
    api.getQuadrants()
      .then(quadrants => {
        this.quadrants = quadrants;
      });
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.house)
        // this fires when save is complete and data added to houses array
        .then(() => {
          this.house = initHouse();
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