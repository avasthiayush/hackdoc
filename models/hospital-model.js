const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*Creating model for hospital Database using mongoose schema.*/

const hospitalSchema = new Schema({
    googleId:String,
    email:String,
});

const Hospital = mongoose.model('hospital',hospitalSchema);

module.exports = Hospital;