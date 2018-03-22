var facebookFunction={};

facebookFunction.operation = function(req,res){
    console.log('req.body.result.action:',req.body.result.action);
if(req.body.result.action === 'input.welcome'){  
    var resObj = {
          "speech": "",
          "messages": [{
            "type": 4,
            "platform": "facebook",
            "payload": {
              "facebook": {
                "attachment": {
                  "type": "template",
                  "payload": {
                    "template_type": "list",
                    "top_element_style": "compact",
                    "elements": [
                      {
                        "title": "Bus Schedule",
                        "image_url": "https://cdn2.iconfinder.com/data/icons/travel-set-2/512/18-512.png",
                        "subtitle": "Category for bus's schedule related queries",
                        "buttons": [
                            {
                                "type": "web_url",
                 //"url": "https://limitless-lake-62312.herokuapp.com/index.html",
                                "url": "https://paynowfrombot.herokuapp.com/html/index.html",
                                "title": "Buy Now",
                                "webview_height_ratio": "tall",
                                "messenger_extensions": "true"
                              }
                        ]
                      },
                      {
                        "title": "Quality of Service",
                        "image_url": "https://www.hbs.edu/mba/PublishingImages/icon-handshake.png",
                        "subtitle": "Category for our service quality related queries",
                        "buttons": [
                          {
                            "type": "postback",
                            "title": "Select",
                            "payload": "quality of service"
                          }
                        ]
                      },
                      {
                        "title": "Payment related",
                        "image_url": "https://www.rupay.co.in/sites/all/themes/rupay/images/cashback.png",
                        "subtitle": "Category for all payment related queries",
                        "buttons": [
                          {
                            "type": "postback",
                            "title": "Select",
                            "payload": "payment"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            }
          },
          {
            "type": 0,
            "speech": ""
          }
        ]
  
  
        };
    res.json(resObj);
  }
  if(req.body.result.action === 'create_incident_boarding'){    
    var resObj = {
        "speech": "",
        "messages": [{
          "type": 4,
          "platform": "facebook",
          "payload": {
            "facebook": {
              "attachment": {
                "type": "template",
                "payload": {
                  "template_type": "button",
                  "text": "Click below button to view details",
                  "buttons": [{
                      "type": "web_url",
       //"url": "https://limitless-lake-62312.herokuapp.com/index.html",
                      "url": "https://google.com",
                      "title": "info",
                      "webview_height_ratio": "tall",
                      "messenger_extensions": "true"
                    }]
                }
              }
            }
          }
        },
        {
          "type": 0,
          "speech": ""
        }
      ]


      };
  res.json(resObj);
  }
};
module.exports = facebookFunction;