const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    itemName:{
        type: String,
        required: true,
        
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
        required: true,
    }

})
module.exports=mongoose.model('menu',menuSchema)