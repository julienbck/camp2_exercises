const express = require("express");
const nunjucks = require("nunjucks");
const fetch = require("node-fetch");
const importData = require('./importData.js');

const port = process.env.PORT || 3000;

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app
});


app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.get("/", function(request, result) {
  result.render("home")
});

app.get("/categories", function(request, result) {
  importData.apiRequestDataDecathlon("categories")
  .then(categoriesDKT => {
  result.render("categories",{importData : categoriesDKT})
  });
});

app.get("/products", function(request, result) {
  importData.apiRequestDataDecathlon("products")
  .then(productsDKT => {
  result.render("products",{importDataProducts : productsDKT})
  });
});

app.get("/products/:id", function(request, result) {
  importData.apiRequestDataDecathlon(`products/${request.params.id}`)
  .then(productsIdDKT => {
  result.render("productsSingle",{importDataProductsSingle : productsIdDKT})
  });
});

app.get("/categories/:id/products", function(request, result) {
  importData.apiRequestDataDecathlon(`categories/${request.params.id}/products`)
  .then(productsByCategoriesDKT => {
  result.render("productsByCategories",{importDataProductsByCategories : productsByCategoriesDKT})
  });
});






app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
