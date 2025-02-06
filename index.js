
const express = require('express');
const { resolve } = require('path');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();
const app = express();
const port = 3010;
const Menu=require('./schema')
app.use(express.json())
app.use(express.static('static'));

const mongoURL=process.env.url;
mongoose.connect(mongoURL).then(()=>{
  console.log("MongoDB connected successfully")
}).catch((err)=>{
    console.log(err)
  })

app.get('/menu', async(req, res) => {
  try {
    const data=await Menu.find()
    res.status(200).json({"message":"data retrieved successfully", data})
  } catch (err) {
    console.error(err) 

  }
});

app.post('/menu', async(req,res)=>{
  const payload= req.body
  console.log(payload)
  try {
    const new_item=new Menu(payload)
    await new_item.save();
    res.status(201).json({"message":"New item added to the menu"})
  } catch (err) {
    console.error(err);
    res.status(500).json({error:err})
  }
})

app.listen(port, async() => {
  console.log(`Example app listening at http://localhost:${port}`);
});