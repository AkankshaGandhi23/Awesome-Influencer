const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name :{ type : String, required : true},
    email : {type : String, required : true},
    message : String,
    createdAt: Date
});

module.exports =model('contact', mySchema);
