const express = require("express");
const app = express();
const request = require ('request');
const PG = require("pg");
const client = new PG.Client();
client.connect();
// const port = process.env.PORT || 3000;

//
// app.listen(port, function () {
//   console.log("Server listening on port:" + port);
// });


function APICallBrands () {
  request(
    {
      url: 'https://decath-product-api.herokuapp.com/brands',
      method: "GET"
    },
    function(error, response, result) {
      const brands = JSON.parse(result);
      const brandsMapped = brands.map( brandsMap => {
        const query = {
          text: 'INSERT INTO brands VALUES($1::uuid ,$2::text)',
          values: [brandsMap.id, brandsMap.title]
        };
        client.query(query, (err, res) => {
          if (err) {
            console.log(err.stack);
          } else {
            console.log(brandsMap.id[0]);
          }
        });
      });
    }
  );
}
module.exports = {
  APICallBrands : APICallBrands
};
