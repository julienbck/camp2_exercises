const request = require ('request');

function myFunction(result){
  console.log(result);
}

function simpleGet(callback){
  request(
    {
      url : 'https://postman-echo.com/get',
      method: 'GET'
    }, function (error, statusCode, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    });
}

function simpleGetWithParams(callback){
  request(
    {
      url : 'https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis',
      method: 'GET'

    },
    function (error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      const jsonAtParse = JSON.parse(result);
      callback(jsonAtParse.args);
    }
  );
}

function validateTimestamp(callback){
  const timestamp = new Date().toISOString(); //new Date(1382086394000); ou new Date().toISOString()
  request(
    {
      url : `https://postman-echo.com/time/valid?timestamp=${timestamp}`,
      method: "GET"
    },
    function (error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // // console.log("statusCode:", response); // Print the response object
      callback(result);
    }
  );

}
simpleGet(myFunction);
simpleGetWithParams(myFunction);
validateTimestamp(myFunction);
// function simpleGetWithParams(callback) {
//
//
// }
// function validateTimestamp(callback){
//
// }

//
module.exports = {
  simpleGet : simpleGet,
  simpleGetWithParams : simpleGetWithParams,
  validateTimestamp : validateTimestamp
};
