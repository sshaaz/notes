const  mongoose = require("mongoose")

const notesschema = new mongoose.Schema({

title:{
    type:String,
    required:true
},
message:{
    type:String,
    required:true,
    trim:true
},
category:{
    type:String,
    default:"General"
}

})





const notesModel = mongoose.model('notes',notesschema)
module.exports=notesModel