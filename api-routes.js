// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var contactController = require('./contactController');
var entityController = require('./entityController');
var schemaController = require('./schemaController');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Entity routes
router.route('/entities')
    .get(entityController.index);



router.route('/entities/:entity_id')
    .get(entityController.view)
    .put(entityController.update);


// Entity routes
router.route('/schemas')
    .get(schemaController.index)
    .post(schemaController.new);


router.route('/schemas/:schema_id')
    .get(schemaController.view)


/*
//API route for all the data
app.get('/api/getAll', (req, res) => {

    request('http://www.mocky.io/v2/5d1c07823400005200b5fae7', function(error, response, result) {
        res.send(JSON.parse(result));
    });
});


//API route for the filtration
app.get('/api/getByFilter',(req,res)=>{
    var location=(req.query.location);
    var industry=(req.query.industry);
    var size=(req.query.size);
    var use_case=(req.query.use_case);
    var resultFilter=new Array();
    request('http://www.mocky.io/v2/5d1c07823400005200b5fae7', function(error, response, result) {
        var details=JSON.parse(result);
        for(var det in details)
        {

            //for the location filtration

            if(location)
            {
                if(location== details[det].location)
                {
                    resultFilter.push(details[det]);
                }

                if(resultFilter)
                {
                    for(var i=0;i<resultFilter.length;i++)
                    {
                        if(resultFilter[i].location!=location)
                        {
                            resultFilter.splice(i,1);
                        }
                    }
                }

            }
            //for the industry filtration
            if(industry)
            {
                if(industry== details[det].industry)
                {
                    resultFilter.push(details[det]);
                }

                if(resultFilter)
                {
                    for(var i=0;i<resultFilter.length;i++)
                    {
                        if(resultFilter[i].industry!=industry)
                        {
                            resultFilter.splice(i,1);
                        }
                    }
                }

            }

//for the size filtration
            if(size)
            {
                if(size== details[det].company_size)
                {
                    resultFilter.push(details[det]);
                }

                if(resultFilter)
                {
                    for(var i=0;i<resultFilter.length;i++)
                    {
                        if(resultFilter[i].company_size!=size)
                        {
                            resultFilter.splice(i,1);
                        }
                    }
                }
            }

            //for the use case filtration
            if(use_case)
            {
                if(use_case== details[det].use_case)
                {
                    resultFilter.push(details[det]);
                }

                if(resultFilter)
                {
                    for(var i=0;i<resultFilter.length;i++)
                    {
                        if(resultFilter[i].use_case!=use_case)
                        {
                            resultFilter.splice(i,1);
                        }
                    }
                }

            }
        }

        console.log(resultFilter);

//Below I have made the JSON data unique.
        var uniqueFilter=[];


        for(var value of resultFilter){
            if(uniqueFilter.indexOf(value) === -1){
                uniqueFilter.push(value);
            }
        }

//the new json is then passed to the template
        res.send(uniqueFilter);
    });
});

*/

// Export API routes
module.exports = router;