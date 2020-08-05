const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  console.log(req.body)

  const twiml = new MessagingResponse();

  // text message
  const msg = twiml.message('The Robots are coming! Head for the hills!');

  // image message
  msg.media('https://demo.twilio.com/owl.png');

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(1337, () => {
  console.log('Express server listening on port 1337');
});

// $> twilio phone-numbers:update "+xxxxxxxxxxx" --sms-url="http://localhost:1337/sms"