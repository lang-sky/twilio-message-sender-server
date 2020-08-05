require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: process.env.FROM,
    to: process.env.TO,
  })
  .then(message => console.log(message))
  .catch(err => console.log(err));
