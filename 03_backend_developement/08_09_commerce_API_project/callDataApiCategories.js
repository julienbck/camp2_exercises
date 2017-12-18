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


function APICallCategories () {
  request(
    {
      url: 'https://decath-product-api.herokuapp.com/categories',
      method: "GET"
    },
    function(error, response, result) {
      const categories = JSON.parse(result);
      const categoriesMapped = categories.map( categoriesMap => {

        const query = {
          text: 'INSERT INTO categories VALUES($1::uuid ,$2::integer, $3::text)',
          values: [categoriesMap.id, categoriesMap.decathlon_id, categoriesMap.label]
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
  APICallCategories : APICallCategories
};
