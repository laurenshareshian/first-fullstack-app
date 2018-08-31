export default {
  getHouses() {
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
  },
  getHouseById(id) {
    return fetch(`http://localhost:3000/api/houses/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json());
  },
  deleteHouse(id) {
    return fetch(`http://localhost:3000/api/houses/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json());
  },
  updateHouse(house, id) {
    return fetch(`http://localhost:3000/api/houses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(house)
    })
      .then(response => response.json());
  },

  getQuadrants() {
    return fetch('http://localhost:3000/api/quadrants', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  }

};
  