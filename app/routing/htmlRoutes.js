var express = require('express')
    , htmlRouter = express.Router()
    ;
var path = require('path');


module.exports = function(app) {

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

};