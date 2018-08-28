<template id="house-form">
<div class="form-container">
  <section class="form">
    <div class="form-title">
      <h1>New House</h1>
      <p> Add a new house </p>
    </div>
    <form @submit.prevent="handleSubmit">
      <label>
        Address
        <input type="text" name="address" placeholder="Address" required
          v-model="house.address">
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
  </section>
  </div>
</template>

<script>
const initHouse = () => {
  return {
    address: '',
    sale_price: '',
    sale_date: '',
    square_feet: '',
    year_built: '',
    owner: ''
  };
};
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      house: initHouse()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.house)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.house = initHouse();
        });
    }
  }
};
</script>

<style scoped>
/* .add-house {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
} */

/* button {
  background-color:black;
  width: 100%;
  padding: 20px;
  color: white;
  font-size: 18px;
  border-bottom: solid 5px #27b0e4;
  border-radius: 100px;
} */
button {
    background: silver;
    border: none;
    color: black;
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
.form {
  background-color: white;
  max-width: 400px;
  height: 700px;
  padding: 20px;
  position: sticky;
  top: 50px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.form:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.form-title {
  padding: 15px;
  text-align: center;
}

.form-container {
  display: flex; 
  justify-content: center;
  background-image: url("/portland_bg.jpeg");
  background-position: fixed;
  background-size: cover; 

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>