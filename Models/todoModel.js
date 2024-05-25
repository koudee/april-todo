const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    // time:{
    //     type: Date,
    //     required: true,
    // }
},
{
    timestamps: true    
}
);
// const todoObj = new todoSchema({
//     todo: "anything",
//     username: "test4",
//     time: Date.now(),
// })
module.exports = mongoose.model("todo",todoSchema);