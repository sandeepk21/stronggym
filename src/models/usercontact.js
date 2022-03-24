const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=mongoose.Schema({
   name:{type:String,required:true},
   email:{type:String,required:true,validator(value){if(!validator.isEmail(value)){
      throw new Error("valid email address");
   }}},
   comment:{type:String,required:true}
});

const UserContact=mongoose.model("UserContact",userSchema);

module.exports= UserContact;