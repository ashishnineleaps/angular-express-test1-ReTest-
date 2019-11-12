const express = require('express');
const api_helper = require('./api_helper')
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use((req,res,next) => {
 next();
})

 app.get('/getAPIResponse', (req, res) => {
  api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
      res.status(200).json(response)
  })
  .catch(error => {
      res.send(error)
  })
})
 app.get('/getQueryResponse', (req, res) => {
  api_helper.make_API_call(`https://jsonplaceholder.typicode.com/todos/${req.query.id}`)
    .then(response => {
    
      res.status(200).json(response)
  })
  .catch(error => {
      res.send(error)
  })
})

 module.exports = app
