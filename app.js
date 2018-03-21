const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const { DialogflowApp } = require('actions-on-google');
const logger = require('nodejslogger')
logger.init({"file":"./logs/logFile.log", "mode":"DIE"})
app.use(bodyparser.json());
app.use(express.static('html'));
app.post('/welcome', (req, res) =>{ 
  console.log('initial req:',req.body.result.resolvedQuery);
  logger.info('initial req:',req.body.result.resolvedQuery);
  
  /*if(req.body.originalRequest.source === 'facebook'){
    facebook.operation(req,res);
  }
  else if(req.body.originalRequest.source === 'slack'){
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



app.listen(process.env.port||process.env.PORT||3000, () => console.log('App started Running!'));