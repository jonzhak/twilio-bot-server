/* eslint-disable no-console */
const axios = require("axios");

module.exports.DemoBotSender = ({ accountSid, authToken }) => {
  
  const herokuDemoURL = " hhttp://ea92e17e1dd2.ngrok.io/sendResponse";


  return {
    sendMsg: ({
      fromNumber,
      msg = 'msg is null',
      mediaUrl = null,
    }) => {
      const reqData = {
        message: msg,
        from: fromNumber,
        mediaUrl
    };
    if (fromNumber === 'whatsapp:+14155238886') {
      return null;
    }
    console.log('DEMO BOT SENDER IS BEING ACTIVATED')
     return axios
    .post(herokuDemoURL, JSON.stringify(reqData), {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .catch(function (error) {
        // handle error
        console.log("@@@@@@@@@@ERROR AT PRICE RULE CREATE:   ", error);
        return false;
    });
    },
    sendMediaList: async ({
      fromNumber,
      msg,
      mediaUrlList,
    }) => {
      if (fromNumber === 'whatsapp:+14155238886') {
        return null;
      }
      const reqData = {
        messageBody: msg,
        messageFrom: fromNumber,
        mediaUrl:medurll
    };
      return axios
    .post(herokuDemoURL, JSON.stringify(reqData), {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .catch(function (error) {
        // handle error
        console.log("@@@@@@@@@@ERROR AT PRICE RULE CREATE:   ", error);
        return false;
    });
    },
  };
};
