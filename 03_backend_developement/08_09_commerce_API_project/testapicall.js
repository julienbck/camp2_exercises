const request = require ('request');


function APIcall () {
  request(
    {
      url: 'https://decath-product-api.herokuapp.com/products',
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response status code if a response was received
      const jsonParseResult = JSON.parse(result);
      console.log(jsonParseResult);
    }
  );
}

APIcall();
