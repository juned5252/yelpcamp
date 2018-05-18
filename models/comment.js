var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    author:{
        id:
        username:
    }
})


module.exports = mongoose.model("Comment", commentSchema);