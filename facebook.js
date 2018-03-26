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
                        "title": "Blue Shirt",
                        "image_url": "https://blackhawk.com/getattachment/Products/Apparel/Men-s-Apparel/Shirts/BLACKHAWK-Tac-Convertible-Shirt/TS04AB-01.png.aspx?maxsidesize=700",
                        "subtitle": "Cotton shirt : Rs.1500",
                        "buttons": [
                            {
                                "type": "web_url",
                 //"url": "https://limitless-lake-62312.herokuapp.com/index.html",
                                "url": "https://paynowfrombot.herokuapp.com/checkout/",
                                "title": "Buy Now",
                                "webview_height_ratio": "tall",
                                "messenger_extensions": "true"
                              }
                        ]
                      },
                      {
                        "title": "Fashion plus",
                        "image_url": "https://sc01.alicdn.com/kf/HTB1ZQQjJVXXXXX1XVXX760XFXXXx/200419480/HTB1ZQQjJVXXXXX1XVXX760XFXXXx.png",
                        "subtitle": "Linen Rs.1800",
                        "buttons": [
                          {
                            "type": "web_url",
                            //"url": "https://limitless-lake-62312.herokuapp.com/index.html",
                            "url": "https://paynowfrombot.herokuapp.com/checkout/",
                            "title": "Buy Now",
                            "webview_height_ratio": "tall",
                            "messenger_extensions": "true"
                          }
                        ]
                      },
                      {
                        "title": "Checked Shirt",
                        "image_url": "https://www.elmc.co/images/product/Flannel%20shirt%20red%201.png",
                        "subtitle": "Checked casual Rs.1700",
                        "buttons": [
                          {
                            "type": "web_url",
                            //"url": "https://limitless-lake-62312.herokuapp.com/index.html",
                            "url": "https://paynowfrombot.herokuapp.com/checkout/",
                            "title": "Buy Now",
                            "webview_height_ratio": "tall",
                            "messenger_extensions": "true"
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