const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const { DialogflowApp } = require('actions-on-google');
var facebook = require('./facebook')
var fs = require('fs');
app.use(bodyparser.json());
app.use(express.static('html'));
app.post('/pay', (req, res) =>{ 
  console.log('initial req:',req.body.result.resolvedQuery);
  
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

app.get('/checkout/:price',function(req, res){ 
  var contextParams ={
   price:req.params.price
  } 
  processRequest(contextParams)
  .then((resp)=>{ 
   console.log(resp); 
   res.end(resp); 
  })
  .catch((err)=>{
   res.json(err).end();
  }); 
 });
 var processRequest = function(contextParams){
  return new Promise(function(resolve, reject){
   var html = fs.readFileSync('./html/index.html','utf-8');  
   console.log('contextParams:'+contextParams);
   console.log(html);
   html = html.replace('Rs'," Rs "+contextParams.price);    
   resolve(html);
  })
 }
 



app.listen(process.env.port||process.env.PORT||3000, () => console.log('App started Running!'));