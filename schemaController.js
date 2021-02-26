// contactController.js
// Import contact model
Schema = require('./schemaModel');
// Handle index actions
exports.index = function (req, res) {
    Schema.get(function (err, schemas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Schemas retrieved successfully",
            data: schemas
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var schema = new Schema();
    schema.name = req.body.name ? req.body.name : schema.name;
    schema.gender = req.body.gender;
    schema.email = req.body.email;
    schema.phone = req.body.phone;
// save the schema and check for errors
    schema.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New schema created!',
                data: schema
            });
    });
};
// Handle view schema info
exports.view = function (req, res) {
    Schema.findById(req.params.schema_id, function (err, schema) {
        if (err)
            res.send(err);
        res.json({
            message: 'Schema details loading..',
            data: schema
        });
    });
};
// Handle update schema info
exports.update = function (req, res) {
    Schema.findById(req.params.schema_id, function (err, schema) {
        if (err)
            res.send(err);
        schema.name = req.body.name ? req.body.name : schema.name;
        schema.gender = req.body.gender;
        schema.email = req.body.email;
        schema.phone = req.body.phone;
// save the schema and check for errors
        schema.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Schema Info updated',
                data: schema
            });
        });
    });
};
// Handle delete schema
exports.delete = function (req, res) {
    Schema.remove({
        _id: req.params.schema_id
    }, function (err, schema) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Schema deleted'
        });
    });
};