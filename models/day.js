var mongoose = require('mongoose');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var DaySchema = new mongoose.Schema({
  number: {type: Number},
  hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
  restaurants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'}],
  activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}]
});

module.exports = mongoose.model('Day', DaySchema);
