const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const data = require ("./pizza");
const userRoutes = require ("./router.js")
const port = process.env.PORT || 3001 ; 

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use("/pizza",(userRoutes));

app.listen(port,()=>{ 
    console.log(`listening on http://localhost:${port}`)
})
