const twilio = require('twilio');
const authToken = require('../getAuthToken');

const accountSid = 'ACd40192a9c430fabab5e2e934c0f98fe4';

const sendMsg = ({
  fromNumber,
  msg = 'msg is null',
  mediaUrl = null,
}) => {
  if (fromNumber === 'whatsapp:+14155238886') {
    console.log(msg);
    return;
  }

  const client = twilio(accountSid, authToken);
  if (mediaUrl) {
    client.messages
      .create({
        body: msg,
        from: 'whatsapp:+14155238886',
        to: fromNumber,
        mediaUrl,
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .done();
  } else {
    client.messages
      .create({
        body: msg,
        from: 'whatsapp:+14155238886',
        to: fromNumber,
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .done();
  }
};
module.exports = {
  sendMsg,
};
