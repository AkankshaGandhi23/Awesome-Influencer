const {model, Schema} = require('../connection');

const mySchema = new Schema({
    FirstName :{ type : String, required : true},
    user : String,
    postedAt : Date,
    description : String,
    image : String,

    LastName :{ type : String, required : true},
    user : String,
    postedAt : Date,
    description : String,
    image : String,

    Email :{ type : String, required : true},
    user : String,
    postedAt : Date,
    description : String,
    image : String,

    phoneNumber : {type: Number, default : 0},
    share : {type: Number, default : 0}
});

module.exports =model('contact', mySchema);
