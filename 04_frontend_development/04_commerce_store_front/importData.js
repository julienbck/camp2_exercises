const fetch = require("node-fetch");

function apiRequestDataDecathlon(rootData) {
  return fetch(`https://decath-product-api.herokuapp.com/${rootData}`)

    .then(response => {
      return response.json()
    })
    .then(result => {
      return result
    })
    .catch(error => {
      return error
    });
}



module.exports = {
  apiRequestDataDecathlon : apiRequestDataDecathlon,
};
