'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/users.js');
const port = process.env.PORT || 8300
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users );

app.listen(port, ()=>{
  console.log('listening on port '+ port);
})
