const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: { type: String, required: true },
    email: {type : String, unique : true, required : true},
    password: String,
    avatar: {type : String, default: ''},
    role:{type : String,default:'user'},
    createdAt: Date,
});

module.exports = model('influencer', mySchema);
