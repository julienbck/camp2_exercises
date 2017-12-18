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


function APICallProducts () {
  request(
    {
      url: 'https://decath-product-api.herokuapp.com/products',
      method: "GET"
    },
    function(error, response, result) {
      const products = JSON.parse(result);
      const productsMapped = products.map( productsMap => {
        const query = {
          text: 'INSERT INTO products VALUES($1::uuid ,$2::integer, $3::text, $4::text, $5::uuid, $6::numeric, $7::numeric, $8::numeric, $9::numeric, $10::text, $11::numeric)',
          values: [productsMap.id, productsMap.decathlon_id, productsMap.title,
            productsMap.description, productsMap.brand_id, productsMap.min_price ,
            productsMap.max_price, productsMap.crossed_price, productsMap.percent_production,
            productsMap.image_path, productsMap.rating]
        };
        client.query(query, (err, res) => {
          if (err) {
            console.log(err.stack);
          } else {
            // console.log(res.rows[0]);
          }
        });
      });
    }
  );
}

module.exports = {
  APICallProducts : APICallProducts
};
