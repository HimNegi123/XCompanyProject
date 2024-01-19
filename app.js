 const express = require("express");
 const app = express();
 const port = process.env.PORT || 3000;
 const router = require("./router/doctorRouter");
 app.use('',router);
app.listen(port,(err)=>{
if(!err) console.log("Server is connected");
else console.log(err);
});


