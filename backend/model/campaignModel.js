const {model, Schema} = require('../connection');

const mySchema = new Schema({
    title :{ type : String, required : true},
    type : String,
    cover : {type : String, default: ''},
    description : String,
    lastDate : Date,
    createdAt : Date
});

module.exports =model('brands', mySchema);
