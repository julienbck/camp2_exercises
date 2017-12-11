const request = require ('request');

const oauth = require("oauth");
const OAuth = new oauth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A", null, "HMAC-SHA1"
);
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_PASSWORD;
const url_watson = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
const userTwitter = "letsencrypt"

const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${userTwitter}`;


// Again, replace string by your credentials.
OAuth.get(url,
  process.env.TWITTER_ACCESS_TOKEN,
  process.env.TWITTER_ACCESS_SECRET,
  function (error, data) {
    if (error) {
      console.log(error);
    }
    else {

      const text = JSON.parse(data).map( function (tweet) {
        return tweet.text;
      }).join();
      const uri = encodeURI(url_watson + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
      request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
        const twitterUserSentiment = JSON.parse(body);
        console.log(body);
        console.log(`${userTwitter} is ${twitterUserSentiment.sentiment.document.label} on twitter \n Indicator of emotions on 100: \n Angry : ${twitterUserSentiment.emotion.document.emotion.anger * 100} `);
      });
    }
  });
