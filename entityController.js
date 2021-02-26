// contactController.js
// Import contact model
Entity = require('./entityModel');


// Handle index actions
exports.index = function (req, res) {
    Entity.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Entities retrieved successfully",
            data: contacts
        });
    });
};


exports.update = function (req, res) {
    //console.log("body: "  + JSON.stringify(req.body));

    Entity.findByIdAndUpdate(
        { _id:  req.params.entity_id},
        req.body,
        {new: true, runValidators: false},
        function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    message: 'Entity Info updated',
                    data: result
                });
            }
        }
    );

    /*
    Entity.findById(req.params.entity_id, function (err, entity) {
        if (err)
            res.send(err);

        console.log("Name: "  + (typeof entity));

        //entity= req;

        entity.name = "CHANGED";

        entity.markModified('name');

        entity.save(function (err) {
            if (err) {
                res.json(err);
                console.log(err);
                return;
            }
            res.json({
                message: 'Entity Info updated',
                data: entity
            });
        });

    }); */
};


// Handle view contact info
exports.view = function (req, res) {
    Entity.findById(req.params.entity_id, function (err, entity) {
        if (err)
            res.send(err);

        res.json({
            message: 'Entity details loading..',
            data: entity
        });
    });
};