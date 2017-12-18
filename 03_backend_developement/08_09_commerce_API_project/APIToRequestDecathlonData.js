const express = require("express");
const app = express();
const PG = require("pg");
const client = new PG.Client();

client.connect();


app.get("/categories", function(request, result) {
  client.query(
    "SELECT * FROM categories",
    function ( error, resultQuery) {
      if (error) {
        result.send(error);
      } else {
        result.json(resultQuery.rows);
      }
    });
});

app.get(
  "/categories/:id",
  function(request, result) {
    // request database
    const client = new PG.Client();
    client.connect();
    client.query(
      "SELECT * FROM categories WHERE id = $1::uuid",
      [request.params.id],
      function(error, resultQuery) {
        if (error) {
          result.send(error);
        } else {
          result.json(resultQuery.rows);
        }
        client.end();
      }
    );
  }
);
app.get("/brands", function(request, result) {
  client.query(
    "SELECT title FROM brands",
    function ( error, resultQuery) {
      if (error) {
        result.send(error);
      } else {
        result.json(resultQuery.rows);
      }
    });
});
app.get(
  "/brands/:id",
  function(request, result) {
    // request database
    const client = new PG.Client();
    client.connect();
    client.query(
      "SELECT * FROM brands WHERE id = $1::uuid",
      [request.params.id],
      function(error, resultQuery) {
        if (error) {
          result.send(error);
        } else {
          result.json(resultQuery.rows);
        }
        client.end();
      }
    );
  }
);

app.get("/products", function(request, result) {
  client.query(
    "SELECT * FROM products LIMIT 150",
    function ( error, resultQuery) {
      if (error) {
        result.send(error);
      } else {
        result.json(resultQuery.rows);
      }
    });
});

app.get(
  "/products/:id",
  function(request, result) {
    // request database
    const client = new PG.Client();
    client.connect();
    client.query(
      "SELECT * FROM products WHERE id = $1::uuid",
      [request.params.id],
      function(error, resultQuery) {
        if (error) {
          result.send(error);
        } else {
          result.json(resultQuery.rows);
        }
        client.end();
      }
    );
  }
);
const port = process.env.PORT || 3000;


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
