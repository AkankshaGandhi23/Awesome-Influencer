const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name :{ type : String, required : true},
    email : String,
    password: String,
    logo : {type : String, default: 'logo-placeholder-image.png'},
    cover : {type : String, default: ''},
    type : String,
    createdAt : Date
});

module.exports =model('brands', mySchema);
