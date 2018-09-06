export default {
  getHouses() {
    return fetch('http://localhost:3000/api/houses', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getHouse() {
    return fetch('http://localhost:3000/api/houses', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addHouse(house) {
    return fetch('http://localhost:3000/api/houses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(house)
    })
      .then(response => response.json());
  }
};
  