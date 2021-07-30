/* eslint-disable no-console */
const axios = require("axios");

module.exports.DemoBotSender = () => {
  
  const herokuDemoURL = " https://f8d5cb0c6f83.ngrok.io/sendResponse";


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
