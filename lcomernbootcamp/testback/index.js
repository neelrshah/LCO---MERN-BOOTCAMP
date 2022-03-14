const express = require("express");
const app = express();
//const port = 3000
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const port = 8000;
//create routes
app.get("/login", (req, res)=>{
    return res.send("You are visting login route");
});
app.get("/signout", (req, res)=>{
    return res.send("You are signed out");
});

app.listen(port,()=>{
    console.log("Server is up and running");
});