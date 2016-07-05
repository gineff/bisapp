/**
 * Created by Andrey on 30.06.2016.
 */


var mongoose = require('../lib/mongoose');
var Schema = mongoose.Schema;

var InvoiceSchema =  new Schema( {
  description: String,
  state: String
});


module.exports = mongoose.model('Invoice', InvoiceSchema);