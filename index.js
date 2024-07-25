const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client({
  puppeteer: {
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Cliente está pronto!");
});

client.on("message", (message) => {
  if (message.body.startsWith("!ping")) {
    message.reply("pong");
  }
});

client.initialize();
