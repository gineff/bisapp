/**
 * Created by Andrey on 17.06.2016.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bisapp');

module.exports = mongoose;