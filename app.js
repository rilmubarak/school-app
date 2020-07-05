 const express = require('express');
 const routes = require('./routes');

 const app = express();
 const PORT = 3000;

 app.use(express.urlencoded({extended : false})); 
 app.set('view engine', 'ejs');
 app.use('/', routes);

 app.listen(PORT, () => {
     console.log('Listening at port:', PORT);
 })