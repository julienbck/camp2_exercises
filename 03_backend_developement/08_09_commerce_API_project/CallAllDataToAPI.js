const express = require("express");
const app = express();
const request = require ('request');
const PG = require("pg");
const client = new PG.Client();

// function APICallData (tab) {
//   request(
//     {
//       url: `https://decath-product-api.herokuapp.com/${tab}`,
//       method: "GET"
//     },
//     function(error, response, result) {
//       if (tab === 'brands'){
//         const brands = JSON.parse(result);
//         brands.map( brandsMap => {
//           const query = {
//             text: 'INSERT INTO brands VALUES($1::uuid ,$2::text)',
//             values: [brandsMap.id, brandsMap.title]
//           };
//           client.query(query, (err, res) => {
//             if (err) {
//               console.log(err.stack);
//             } else {
//               // console.log(res.brands[0]);
//             }
//           });
//         });
//       } else if (tab === 'products') {
//         const products = JSON.parse(result);
//         products.map( productsMap => {
//           const query = {
//             text: 'INSERT INTO products VALUES($1::uuid ,$2::integer, $3::text, $4::text, $5::uuid, $6::numeric, $7::numeric, $8::numeric, $9::numeric, $10::text, $11::numeric)',
//             values: [productsMap.id, productsMap.decathlon_id, productsMap.title,
//               productsMap.description, productsMap.brand_id, productsMap.min_price ,
//               productsMap.max_price, productsMap.crossed_price, productsMap.percent_production,
//               productsMap.image_path, productsMap.rating]
//           };
//           client.query(query, (err, res) => {
//             if (err) {
//               console.log(err.stack);
//             } else {
//               // console.log(res.products[0]);
//             }
//           });
//         });
//       } else if (tab === 'categories') {
//         const categories = JSON.parse(result);
//         categories.map( categoriesMap => {
//
//           const query = {
//             text: 'INSERT INTO categories VALUES($1::uuid ,$2::integer, $3::text)',
//             values: [categoriesMap.id, categoriesMap.decathlon_id, categoriesMap.label]
//           };
//           client.query(query, (err, res) => {
//             if (err) {
//               console.log(err.stack);
//             } else {
//               // console.log(res.categories[0]);
//             }
//           });
//         });
//       }
//     }
//   );
// }


function JoinProductsCategoriesId (){
  request(
    {
      url: `http://localhost:3000/categories`,
      method: "GET"
    },
    function(error, response, result) {
      const categoriesId = JSON.parse(result).map(GetIDProducts);
    });
}


function GetIDProducts(category) {
  client.connect();
  request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${category.id}/products`,
      method: "GET"
    },
    function(error, response, result) {
      JSON.parse(result).map(categoriesIdMapped => {
        setInterval(function (){

          const query = {
            text: 'INSERT INTO join_products_categories VALUES($1::uuid)',
            values: [categoriesIdMapped.categories_id]
          };
          client.query(query, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              //
            }
          });
        }, 100);
      });
    });
}

JoinProductsCategoriesId();


//
// APICallData('products');
// APICallData('categories');
// APICallData('brands');
