// contactModel.js
var mongoose = require('mongoose');
// Setup schema

var entitySchema2 = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    "id": String,
    "name": String,
    "status": String,
    "email": String,
    "identification": {
        "type": String,
        "document": String
    },
    "expireDate": String,
    "code": String,
    "abbr": String,
    "metadata": Object
});

var entitySchema = mongoose.Schema({
        _id: mongoose.Schema.ObjectId,
        "id": "string",
        "name": "String",
        "status": "string",
        "email": "string",
        "identification": {
                "type": "string",
                "document": "string" },
        "expireDate" : "string",
        "code" : "string",
        "abbr" : "string",
        "metadata": "object",
        "channels": [
                    {
                    "id": "string",
                    "name": "string",
                    "metadata": "object",
                    "profiles": [
                                {
                                "id": "string",
                                "name": "string",
                                "contracts": [
                                            {
                                            "id": "string",
                                            "name": "string",
                                            "conditions": [
                                                {
                                                        "antiquity": {
                                                                "type": "string",
                                                                "min": "number",
                                                                "max": "number"
                                                                },
                                                        "installments": {
                                                                "min": "number",
                                                                "max": "number"
                                                                },
                                                        "amount": {
                                                                "min": "number",
                                                                "max": "number"
                                                                },
                                                        "documents":
                                                            {
                                                                "requested": [
                                                                    {
                                                                        "id": "string",
                                                                        "name": "string",
                                                                        "quantity": "number"
                                                                    }],
                                                                "generated": [
                                                                    {
                                                                        "id": "string",
                                                                        "name": "string"
                                                                    }],
                                                            },
                                                        "metadata": {
                                                                "id": "number"
                                                                    }
                                                       }],
                                "metadata": "object"

                                            }]
                        }]
                    }]

});

var entitySchema1 = mongoose.Schema({});
// Export Entity model
var Entity = module.exports = mongoose.model('jsoneditor_convenios', entitySchema);
module.exports.get = function (callback, limit) {
    Entity.find(callback).limit(limit);
}