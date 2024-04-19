const {model, Schema, Types} = require('../connection');

const mySchema = new Schema({
    title :{ type : String, required : true},
    type : String,
    cover : {type : String, default: ''},
    description : String,
    incentive : Number,
    lastDate : Date,
    followers: Number,
    brand: {type: Schema.Types.ObjectId, ref: 'brands'},
    createdAt : Date
});

module.exports =model('campaign', mySchema);
