var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function spotting_sort_reverse(a, b) {
    return new Date(b.SpottingDate).getTime() - new Date(a.SpottingDate).getTime();
}


/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("birdSpotting");
        var query = {};
        dbo.collection("spottings").find(query).toArray(function(err, result) {
            if (err) throw err;
            request_param_confidence = req.query.confidence;
            bird_spotter_result = result;

            if ((request_param_confidence == '0') || (request_param_confidence == '1')) {
                bird_spotter_result = bird_spotter_result.filter(function(obj, n) {
                    return obj.ConfidenceOfSight == request_param_confidence;
                });
            }

            bird_spotter_result = bird_spotter_result.sort(spotting_sort_reverse)

            res.render('index', { title: 'Bird Spotters', bird_spotter_result: bird_spotter_result });


            db.close();
        });
    });


});

/* GET add-site page. */
router.get('/add-site', function(req, res, next) {
    res.render('add-site', { title: 'Bird Spotters' });
});

//Post
router.post('/spotter/add', function(req, res) {
    var spotter = {
        SpotterName: req.body.SpotterName,
        TypeOfBird: req.body.TypeOfBird,
        PlaceOfSighting: req.body.PlaceOfSighting,
        ConfidenceOfSight: req.body.ConfidenceOfSight == "1" ? true : false,
        SpottingDate: req.body.SpottingDate
    };

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("birdSpotting");
        dbo.collection("spottings").insertOne(spotter, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
    res.redirect('/');
});

module.exports = router;