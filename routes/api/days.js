var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');

var models = require('../../models');
var Day = models.Day;

router.get('/api/days', function(req,res,next) {
	Day.find().exec()
	.then(function(data) {
		res.json(data)
	})
})

router.post('/api/days', function(req,res,next) {
	Day.create({number: 1})
	.then(function(data) {
		res.json(data)
	})
	.then(null, next)
})

router.delete('/api/days', function(req,res,next) {
	Day.remove().exec()
	.then(function(data) {
		console.log("removed: ", data)
	})
	.then(null, next)
})

router.get('/api/days/:id', function(req,res,next) {
	console.log(req.params.id)
})

router.post('/api/days/:id/hotel', function(req,res,next) {
	console.log(req.params.id)
})

router.post('/api/days/:id/restaurants', function(req,res,next) {
	console.log(req.params.id)
})

router.post('/api/days/:id/activities', function(req,res,next) {
	console.log(req.params.id)
})

module.exports = router;