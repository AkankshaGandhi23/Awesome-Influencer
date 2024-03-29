const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name :{ type : String, required : true},
    email : String,
    logo : {type : String, default: ''},
    cover : {type : String, default: ''},
    type : String,
    createdAt : Date
});

module.exports =model('brands', mySchema);
