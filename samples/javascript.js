// Option 1
const lolinck = require("lolinck.js");
(async () => {
  var res = await lolinck("https://lolinck.com", {
    type: "json, xml or text", // response type
    cache: true, // select if you want to use cache or not (premium feature)
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

// Option 2
const request = require("request");

async () => {
  const response = await request(
    `
  https://api.lolinck.xyz/v1/check/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: "https://iplogger.com/akfoakd",
      }),
    }
  );
  console.log(response); // { "url": "https://iplogger.com/akfoakd", NSFW=false, PHISING=false, MALWARE=false, IP_LOGGING=true }
};
