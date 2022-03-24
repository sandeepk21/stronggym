const express=require("express");
const app=express();
const port=process.env.PORT || 3000
const hbs=require("hbs");
require("./db/conn");
// const User=require("./models/usercontact");
const path=require("path");
const UserContact = require("./models/usercontact");
const static_path=path.join(__dirname,"../public")
const view_path=path.join(__dirname,"../template/views")
const partial_path=path.join(__dirname,"../template/partials")
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path))
app.set("views", view_path);
hbs.registerPartials(partial_path);
app.get("/",(req,res)=>{
   res.render("index.hbs");
})
app.get("/index",(req,res)=>{
   res.render("index.hbs");
})
app.get("/contact",(req,res)=>{
   res.render("contact.hbs",{success:''});
})
app.post("/contact",async(req,res)=>{
   try {
      // res.send(req.body);
      
     const userdata=new UserContact(req.body);
     const result=await userdata.save();
    
     console.log(result);
     
      res.status(201).render("contact.hbs",{success:'data save'});
   } catch (error) {
      res.status(500).send(error);
   }
})
app.get("/aboutus",(req,res)=>{
   res.render("aboutus.hbs");
})
app.get("/services",(req,res)=>{
   res.render("services.hbs");
})
app.get("/team",(req,res)=>{
   res.render("ourteam.hbs");
})
app.listen(port,()=>{
   console.log("server is online");
})
