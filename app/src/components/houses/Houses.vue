<template>
<section class="houses">
  <div class="houses-search">
    <AddHouse :on-add="handleAdd"/>
  </div>

  <p v-if="!houses">Loading houses...</p>
  <ul v-else class="list">
    <House
      v-for="(house, index) in houses"
      :key="index"
      :house="house"
    />
  </ul>


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


<style scoped>

.error {
  color: red;
}

.loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}

.houses-title {
  background: white;
  padding: 20px;
}
.houses-body {
  padding: 50px 100px 50px 100px ;
  background: #e9e9e9;
  text-align:center;
  margin:0;
}
h3{
  font-family:'Playfair Display';
  font-size:25px;
  letter-spacing: 1px;
  color:white;
  margin-bottom:0;
  text-transform: none;
  padding: 20px;
}
h1 {
    margin-top: 0px;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  padding-left:0px;
  color:black;
  
}
.length {color: black;}
li {
  min-height: 250px;
  background:black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* box-shadow: 0px 1px 5px rgba(0,0,0,0.2); */
  transition: all .2s ease-in-out;
  list-style: none;
  text-align: center;
  position: relative;
}
li:hover {
  transform: scale(1.03); 
}


</style>