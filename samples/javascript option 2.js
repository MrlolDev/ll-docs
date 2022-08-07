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
