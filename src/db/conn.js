const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://sandystark:Sandeep890@cluster0.sxmv7.mongodb.net/gym?retryWrites=true&w=majority",{
   useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
   console.log("connection succefully");
}).catch((err)=>{
   console.log(err);
})


