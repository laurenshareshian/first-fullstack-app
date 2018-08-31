<template id="house-form">
    <form @submit.prevent="handleSubmit">
      <label>
        Address
        <input type="text" name="address" placeholder="Address" required
          v-model="edit.address">
      </label>

      <label>
        Quadrant:<br>
        <select v-model.number="edit.quadrantId" required>
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
          v-model="edit.sale_price">
      </label>

      <label>
      Sale Date MM/DD/YYYY:
        <input type="text" name="sale-date" placeholder="Sale Date" required
          v-model="edit.sale_date">
      </label>

      <label>
        Square Feet:
        <input type="text" name="square-feet" placeholder="Square Feet" required
          v-model="edit.square_feet">
      </label>

      <label>
        Market value:
        <input type="text" name="market-value" placeholder="Market value"
          v-model="edit.market_value">
      </label>

      <label>
        Year Built:
        <input type="text" name="year-built" placeholder="Year Built" required
          v-model="edit.year_built">
      </label>

      <label>
        Owner:
        <input type="text" name="owner" placeholder="Owner" required
          v-model="edit.owner">
      </label>
      
      <label>
        <button type="submit">{{ isNew ? 'Add' : 'Update' }}</button>
      </label>
    </form>

</template>
<script>

import shortid from 'shortid';
import api from '../../services/api';

const initHouse = () => {
  return {
    id: '',
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
    house: Object,
    onEdit: {
      type: Function,
    }
  },
  data() {
    return {   
      quadrants: null,
      address: '',
      sale_price: '',
      sale_date: '',
      square_feet: '',
      market_value: '',
      year_built: '',
      owner: '',
      id: '',
      property_id: '',
      quadrantId: '',
      edit: this.house ? Object.assign({}, this.house) : initHouse()
    };
  },
  computed: {
    isNew() {
      return this.house === undefined;
    }
  },
  created() {
    api.getQuadrants()
      .then(quadrants => {
        this.quadrants = quadrants;

        const house = this.house;
        if(this.isNew) return;

        this.edit.id = house.id;
        this.edit.address = house.address;
        this.edit.sale_price = house.sale_price;
        this.edit.sale_date = house.sale_date;
        this.edit.square_feet = house.square_feet;
        this.edit.market_value = house.market_value;
        this.edit.year_built = house.year_built;
        this.edit.owner = house.owner;
        this.edit.property_id = house.property_id;
        
      });




  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit);
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