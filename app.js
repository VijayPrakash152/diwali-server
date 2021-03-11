const express = require("express");
const app = express();
const sendMsg = require("./my_messager");
const wishes = require("./wishes");
const numbers = require("./numbers");

setInterval(() => {
  let wish = wishes();
  let number = numbers();
  sendMsg(number, wish);
}, 1000); // Here you can set the interval at which you want to send messages
// 1000 is in miliseconds

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is running  successfully at port ${PORT}`);
});
