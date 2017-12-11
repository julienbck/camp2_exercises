
const request = require('request');

const port = process.env.PORT || 3000;

// Replace string with correct credentials
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_PASSWORD;
const url = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

const text = "Well, you made me weep and you made me moan. When you caused me to leave, child, my happy home. But someday, baby. You ain't worry my life anymore";
const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);

request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
  console.log(body);
});
