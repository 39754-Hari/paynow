var serviceNowApi = require('./serviceNowApi.js')
var facebookFunction={};

facebookFunction.operation = function(req,res){
    console.log('req.body.result.action:',req.body.result.action);
if(req.body.result.action === 'input.welcome'){  
    var resObj = {};
        resObj={
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
  if(req.body.result.action === 'create_incident_boarding'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters,'2',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
        "speech": "",
        "messages": [
          {
            "type": 3,
            "platform": "facebook",
            "imageUrl": "https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number
          },
          {
            "type": 2,
            "platform": "facebook",
            "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully. Please note your incident id for future reference : "+data.result.number
            +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+req.body.result.parameters.phoneNumber
            +". \nOur customer care agent will get back to you shortly"
            +".\nWhat do you wanna do next?",
            "replies": [
              "Exit",
              "Main menu"
            ]
          }
        ]
      };
    }
      res.json(resObj);
    });      
  }
  if(req.body.result.action === 'create_incident_maintenance'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters,'1',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
        "speech": "",
        "messages": [
          {
            "type": 3,
            "platform": "facebook",
            "imageUrl": "https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number
          },
          {
            "type": 2,
            "platform": "facebook",
            "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully. Please note your incident id for future reference : "+data.result.number
            +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+req.body.result.parameters.phoneNumber
            +". \nOur customer care agent will get back to you shortly"
            +".\nWhat do you wanna do next?",
            "replies": [
              "Exit",
              "Main menu"
            ]
          }
        ]
      };
    }
      res.json(resObj);
    }); 
  }  
  if(req.body.result.action === 'create_incident_food'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters,'1',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
        "speech": "",
        "messages": [
          {
            "type": 3,
            "platform": "facebook",
            "imageUrl": "https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number
          },
          {
            "type": 2,
            "platform": "facebook",
            "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully. Please note your incident id for future reference : "+data.result.number
            +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+req.body.result.parameters.phoneNumber
            +". \nOur customer care agent will get back to you shortly"
            +".\nWhat do you wanna do next?",
            "replies": [
              "Exit",
              "Main menu"
            ]
          }
        ]
      };
    }
      res.json(resObj);
    });
  }
  if(req.body.result.action === 'create_incident_payment_fail'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters,'1',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
        "speech": "",
        "messages": [
          {
            "type": 3,
            "platform": "facebook",
            "imageUrl": "https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number
          },
          {
            "type": 2,
            "platform": "facebook",
            "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully. Please note your incident id for future reference : "+data.result.number
            +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+req.body.result.parameters.phoneNumber
            +". \nOur customer care agent will get back to you shortly"
            +".\nWhat do you wanna do next?",
            "replies": [
              "Exit",
              "Main menu"
            ]
          }
        ]
      };
    }
      res.json(resObj);
    });
  }
  if(req.body.result.action === 'create_incident_refund'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters,'1',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
        "speech": "",
        "messages": [
          {
            "type": 3,
            "platform": "facebook",
            "imageUrl": "https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number
          },
          {
            "type": 2,
            "platform": "facebook",
            "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully. Please note your incident id for future reference : "+data.result.number
            +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+req.body.result.parameters.phoneNumber
            +". \nOur customer care agent will get back to you shortly"
            +".\nWhat do you wanna do next?",
            "replies": [
              "Exit",
              "Main menu"
            ]
          }
        ]
      };
    }
      res.json(resObj);
    });
  }
  if(req.body.result.action === 'incident_status'){
    console.log((req.body.result.parameters.incidentId).toLowerCase().indexOf('inc'));
    var resObj = {}  ;
    if(req.body.result.parameters.incidentId != ''){
    if((req.body.result.parameters.incidentId).toLowerCase().indexOf('inc') > -1  )
      {
        console.log('hiii');
        serviceNowApi.getIncident(req.body.result.parameters.incidentId,function(err,data) {
          if (err) {
            resObj={
              "speech": "",
              "messages": [
                {
                "type": 2,
                "platform": "facebook",
                "title": "Sorry! There was an error while processing your request. Please try again",
                "replies": [
                  "Main menu"
                ]
                }
              ]
            };
          }
          else{
            if (typeof(data.error) != 'undefined' ){
              console.log('hiii::',data.error);
              if(data.error.message == 'No Record found'){
                resObj= {            
               "speech": "",
               "messages": [
                  {
                "type": 2,
                 "platform": "facebook",
                 "title": "Entered incident id is not found!",
                 "replies": [
                  "Try Again",
                  "Main Menu"
                    ]
                   }
                ]
                }
              }
            }
            else{
              var state = data.result[0].state;
              if(state == 1){
                resObj={
                  "speech": "",
                  "messages": [
                    {
                    "type": 2,
                    "platform": "facebook",
                    "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'New\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?",
                    "replies": [
                      "Exit",
                      "Main menu"
                    ]
                    }
                  ]
                };
              }
              else if(state == 2){
                resObj={
                  "speech": "",
                  "messages": [
                    {
                    "type": 2,
                    "platform": "facebook",
                    "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'In Progress\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?",
                    "replies": [
                      "Exit",
                      "Main menu"
                    ]
                    }
                  ]
                };
              }
              else if(state == 3){
                resObj={
                  "speech": "",
                  "messages": [
                    {
                    "type": 2,
                    "platform": "facebook",
                    "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'On Hold\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?",
                    "replies": [
                      "Exit",
                      "Main menu"
                    ]
                    }
                  ]
                };
              }
              else if(state == 6){
                resObj={
                  "speech": "",
                  "messages": [
                    {
                    "type": 2,
                    "platform": "facebook",
                    "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'Resolved\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?",
                    "replies": [
                      "Exit",
                      "Main menu"
                    ]
                    }
                  ]
                };
              }
              else if(state == 7){
                resObj={
                  "speech": "",
                  "messages": [
                    {
                    "type": 2,
                    "platform": "facebook",
                    "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'Closed\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?",
                    "replies": [
                      "Exit",
                      "Main menu"
                    ]
                    }
                  ]
                };
              }
              else if(state == 8){
                resObj={
                  "speech": "",
                  "messages": [
                    {
                    "type": 2,
                    "platform": "facebook",
                    "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'Canceled\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?",
                    "replies": [
                      "Exit",
                      "Main menu"
                    ]
                    }
                  ]
                };
              }          
            }
          }      
          res.json(resObj);
        }); 
      }
      else if( (req.body.result.parameters.incidentId).toLowerCase().indexOf('exit') == 0 ){
          return res.json({	 
            speech:"",
            displayText: "",
            followupEvent: {
              "name": "WELCOME",
              "data": {
              }
            }
          });
      }
      else{
        console.log('Inside elseee');
        /*return res.json({           
          "speech": "",
          "messages": [
             {
           "type": 2,
            "platform": "facebook",
            "title": "Entered incident id is invalid try with valid one!",
            "replies": [
             "Try Again",
             "Exit",
             "Main Menu"
               ]
              }
           ]
          });*/
          return res.json({	 
 	          speech:"Entered incident id is invalid.Enter a valid one!",
 	          displayText: "Entered incident id is invalid.Enter a valid one!",
 	          followupEvent: {
 	            "name": "event_status",
 	            "data": { 
                 "incidentId" : ""
 	            }
 	          }
 	        });      
      }
    }  
       
  }
}
module.exports = facebookFunction;