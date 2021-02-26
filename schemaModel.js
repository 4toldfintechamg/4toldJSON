// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var schemaSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    collectionName: String,
    tag: String,
    definition: Object

});
// Export Contact model
var schema = module.exports = mongoose.model('4told_schemas', schemaSchema);
module.exports.get = function (callback, limit) {
    schema.find(callback).limit(limit);
}