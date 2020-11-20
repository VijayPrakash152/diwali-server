const config  = require('config');
const client = require('twilio')(config.get('TWILIO_ACCOUNT_SID'), config.get('TWILIO_AUTH_TOKEN'));


const sendMsg = (number,msg) => {
    client.messages
    .create({                          
       from: 'whatsapp:yourTwilioNumber',  // ---> Put your twilio number here  which you
       body: msg,                      //  will get post registration on their site: https://www.twilio.com/
       to: `whatsapp:+91${number}`
     })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err));

}

module.exports = sendMsg;