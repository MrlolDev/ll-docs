const lolinck = require("lolinck.js");

(async () => {
  var res = await lolinck("https://lolinck.com", {
    type: "json", // response type, only json is avalaible for now
    real_time: false, // select if you want to use cache or not (premium feature)
  });
  console.log(res); /* {
    url: "https://lolinck.com",
    MALICIOUS: rfalse,
    SUSPICIUS: false,
    NSFW: false,
    MALWARE: false,
    PHISHING: false,
    IP_LOGGING: false,
  }*/
})();
