const mongoose=require("mongoose");
const AdminSchema=mongoose.Schema({
    userName:{type:String,required:true},
    password:{type:String, required:true},
});
const Admin=module.exports = mongoose.model("Admin", AdminSchema);
