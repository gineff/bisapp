/**
 * Created by Андрей on 28.03.2016.
 */


var mongoose = require('../lib/mongoose');
var Schema = mongoose.Schema;

var UserSchema =  new Schema( {
    firstName: String,
    lastName: String,
    dateRegister: { type: Date, default: Date.now },
    password: {
        type: String,
        default: ((Math.random()*Math.random()).toString(36).substring(2,14))
    },
    state:String
},{
    id: false,
    toJSON : {virtuals: true},
    toObject : {virtuals: true}
});


UserSchema.options.toObject = {
    transform: function(doc, ret, options) {
        delete ret.__v;
        delete ret.password;
        return ret;
    }
};

UserSchema.virtual('userId')
    .get(function() {
        return this._id;
    });


module.exports = mongoose.model('User', UserSchema);

