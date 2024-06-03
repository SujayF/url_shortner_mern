const mongooose = require('mongoose')

const urlSchema  = new mongooose.Schema({
    shortId : {
         type : String,
         required : true,
         unique : true,
    },
    redirectUrl : {
         type : String,
         required: true,
    },
    visitHistory : [
         { timestamp :  {type :  Number} }
    ],
},
{ timestamps : true }
)

const URL = mongooose.model('url', urlSchema);

module.exports = URL