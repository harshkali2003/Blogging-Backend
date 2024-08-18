const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


const Info = require("./ClientSide");
const User = require("./SignUpData");
const Logs = require("./LogInData");
const feedback = require('./Feedback');
const Feedback = require("./Feedback");

app.post("/create", async (req, resp) => {
  let data = new Info(req.body);
  let result = await data.save();
  console.log("Successfully Post Created");
  if (result) {
    resp.send(result);
  }
});

app.get("/posts", async (req, resp) => {
  let data = await Info.find();
  if (data.length > 0) {
    resp.send(data)
    console.log("Getting the data");
  } else {
    resp.send("ERROR");
    console.log("ERROR");
  }
});

app.post("/register", async (req, resp) => {
  let data = new User(req.body);
  let result = await data.save();
  console.log("Successfully Post Created");
  if (result) {
    resp.send(result);
  }
});

app.post("/log", async (req, resp) => {
  let data = new Logs(req.body);
  let result = await data.save();
  console.log("Successfully Post Created");
  if (result) {
    resp.send(result);
  }
});

app.post('/feedback' , async (req, resp)=>{
  let data = new Feedback(req.body)
  let result = await data.save()
  console.log("Feedback Received");
  if(result){
    resp.send(result)
  }
  
})

app.delete('/create/:id' , async (req , resp)=>{
  let data = await Info.deleteOne({_id:req.params.id})
  if(data){
    resp.send(data)
    console.log("Deleted");
  }
  else{
    resp.send("ERROR")
  }
})

app.listen(5000);
