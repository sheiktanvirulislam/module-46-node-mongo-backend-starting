const express = require('express');
const app = express();
 const rootCall = (req,res) => {
   res.send("i know man")
    
}
app.get("/",rootCall)


app.listen(3000,()=>{console.log('listening on port 3000')})