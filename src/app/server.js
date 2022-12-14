const express = require ('express');
const bodyParser = require('body-parser');


const app = express();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());
  

 app.post('/login',(req, res) => {
    let password = req.body.password;
    let email = req.body.email;
      console.log(password,email);
      res.send(true);
    
  });

app.listen('3002', () =>   console.log("Server is connected!"));