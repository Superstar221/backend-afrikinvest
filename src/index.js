const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/currency", (req,res) => {
   const currency = [
     {
       id: 1,
       name: "hammer",
     },
     {
       id: 2,
       name: "screwdriver",
     },
     ,
     {
       id: 3,
       name: "wrench",
     },
   ];

  res.json(currency);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));