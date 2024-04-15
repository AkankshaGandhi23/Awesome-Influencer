const {model, Schema, Types} = require('../connection');

const mySchema = new Schema({
    campaign: {type: Schema.Types.ObjectId, ref: 'campaign'},
    influencer: {type: Schema.Types.ObjectId, ref: 'influencer'},
    proof: Object,
    proofUploaded: {type: Boolean, default: false},
    paidIncentive: {type: Number, default: 0},
    createdAt : Date
});

module.exports =model('enroll', mySchema);
