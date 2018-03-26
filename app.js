const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const { DialogflowApp } = require('actions-on-google');
var facebook = require('./facebook')
var fs = require('fs');
const request = require('request');
app.use(bodyparser.json());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true })); 

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const SERVER_URL = process.env.SERVER_URL;
const APP_SECRET = process.env.APP_SECRET;

app.post('/pay', (req, res) =>{ 
  console.log('initial req:',req.body.result.resolvedQuery);
  
  senderId = req.body.originalRequest.data.sender.id;
  
  if(req.body.originalRequest.source === 'facebook'){    
    facebook.operation(req,res);
  }
  /*else if(req.body.originalRequest.source === 'slack'){
    slack.operation(req,res);
  }
  else if(req.body.originalRequest.source === 'google' && req.body.result.action === 'incident_status'){ 
    googleJson.operation(req,res);
  }
  else if(req.body.originalRequest.source === 'google'){    
    const googleApp = new DialogflowApp({ request: req, response: res });
    googleApp.handleRequest(googleAPI);
  }*/
});

app.get('/checkout',function(req, res,next){  
  console.log('Inside checkout.before html');
  let referer = req.get('Referer');
  if (referer) {
      if (referer.indexOf('www.messenger.com') >= 0) {
          res.setHeader('X-Frame-Options', 'ALLOW-FROM https://www.messenger.com/');
      } else if (referer.indexOf('www.facebook.com') >= 0) {
          res.setHeader('X-Frame-Options', 'ALLOW-FROM https://www.facebook.com/');
      }
      res.sendFile('public/html/index.html', {root: __dirname});
  }
});
 app.get('/getValues',function(req, res){ 
   console.log('Inside getValues');
   let body = req.query;
   console.log('Name:',body.cardName)
   let response = {
       "text": `Great, I will book your order`
   };

   res.status(200).send('Please close this window to return to the conversation thread.');
   callSendAPI(body.psid, response);
 });
// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  // Construct the message body
  console.log('inside callsendAPi');
  let request_body = {
    recipient: {
        id: senderId,
    },
    message: {
        text: response,
    },
    speech: '',
    displayText: '',
    messages: [
        {
            "type": 0,
            "platform": "facebook",
            "speech": "Hi " + response
        }
    ]
  };
  console.log(request_body);
  // Send the HTTP request to the Messenger Platform
  request({
      "uri": "https://graph.facebook.com/v2.6/me/messages",
      "qs": {"access_token": PAGE_ACCESS_TOKEN},
      "method": "POST",
      "json": request_body
  }, (err, res, body) => {
      if (!err) {
          console.log('message sent!')
      } else {
          console.error("Unable to send message:" + err);
      }
  });
}
app.listen(process.env.port||process.env.PORT||3000, () => console.log('App started Running!'));