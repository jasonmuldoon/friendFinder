var express = require('express')
    , apiRouter = express.Router()
    ;
var path = require('path');
var bodyParser = require('body-parser');
var friends = require('../data/friends.js');


module.exports = function(app) {
    //returns JSON of friends.
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    //handle incoming survey results and compatibility logic.
    app.post('/api/friends', function (req, res) {

        var newUser = req.body;
        var userAnswers = req.body.scores;
        var match;
        var matchScore = 100;
        

        //console.log(friends);
        
        for(var i=0; i<friends.length; i++) {

            var friendScores = friends[i].scores;
            var score = 0;
            
            for(var j=0; j<friendScores.length; j++) {

                var diff = userAnswers[i] - friendScores[i];
                
                diff = Math.abs(diff);

                score += diff;
            }

            if(score < matchScore)  {

                match = i;
                matchScore = score;
                continue;
            }


        }
        
        friends.push(newUser);

        var finalMatch = friends[match];

        //console.log(finalMatch);

        res.json(finalMatch);
    });

};