// Option 1
const lolinck = require("lolinck.js");
(async () => {
  var res = await lolinck("https://lolinck.com", {
    type: "json, xml or text", // response type
    real_time: true, // select if you want to use cache or check in real time (premium feature)
  });
  console.log(res); /* {
    url: "https://lolinck.com",
    safe: true,
    NSFW: false,
    MALWARE: false,
    PHISHING: false,
    IP_LOGGING: false,
  }*/
})();
