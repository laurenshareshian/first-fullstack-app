<template>
    <div>
      <section v-if="house">
        <h2>{{ house.address }}</h2>
        <p>Sale Price: {{ house.sale_price }}</p>
        <p>Sale Date: {{ house.sale_date }}</p>
        <p>Owner: {{ house.owner }}</p>
        <p>Year Built: {{ house.year_built }}</p>
        <p>Square Feet: {{ house.square_feet }}</p>

          <button>
            <router-link :to="`/houses/${house.id}/edit`"> Edit
            </router-link>
          </button>

        <button @click="handleDelete">Delete</button>
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
  methods: {
    handleDelete() {
      api.deleteHouse(this.$route.params.id);
      this.$router.push('/houses');
    }
  }
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

button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
    width: 15%;
    align-self: center;
}
button:hover {
    transform: scale(1.1); 
}
section{
  display: flex;
  flex-direction: column;
  align-content: center;
}

a {
    font-family: 'Open Sans';
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
  }
</style>
