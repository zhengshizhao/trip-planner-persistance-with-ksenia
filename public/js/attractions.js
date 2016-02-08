'use strict';
/* global $ mapModule daysModule */

var attractionsModule = (function(){

  // jQuery selections

  var $itinerary, $hotel, $restaurants, $activities;
  $(function(){
    $itinerary = $('#itinerary');
    $hotel = $itinerary.find('ul[data-type="hotel"]');
    $restaurants = $itinerary.find('ul[data-type="restaurants"]');
    $activities = $itinerary.find('ul[data-type="activities"]');
  });

  // Attraction class setup
  // Merges keys of data and this
  function Attraction (data) {
    utilsModule.merge(data, this); // copy all key-val pairs into this new obj
    this.buildItineraryItem().buildMarker();
  }

  Attraction.prototype.buildItineraryItem = function () {
    var $button = $('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    var $title = $('<span class="title"></span>').text(this.name);

    // Creates new div for Hotel, Restaurant or Activity list in itinerary block
    this.$itineraryItem = $('<div class="itinerary-item"></div>')
    // Appends span element and remove button
      .append($title)
      .append($button);
    // Captures this
    var self = this;

    //When appended button is clickedm removes captured this.
    $button.on('click', function () {
      self.removeFromDay(); // hide from UI and remove from day model
    });
    return this;
  };

  Attraction.prototype.buildMarker = function () {
    this.marker = mapModule.buildAttractionMarker(this);
    return this;
  };

  // main functions meant to be used in other contexts

  Attraction.prototype.draw = function() {
    // itinerary
    switch (this.type) {
      case 'hotel': $hotel.append(this.$itineraryItem); break;
      case 'restaurant': $restaurants.append(this.$itineraryItem); break;
      case 'activity': $activities.append(this.$itineraryItem); break;
      default: console.error('bad type:', this);
    }
    // map
    mapModule.draw(this.marker);
  };

  Attraction.prototype.hide = function() {
    this.$itineraryItem.detach(); // itinerary
    mapModule.hide(this.marker); // map
  };

  Attraction.prototype.removeFromDay = function() {
    daysModule.removeAttraction(this); // model
  };

  // globally accessible module methods

  var methods = {

    create: function (attractionData) {
      return new Attraction(attractionData);
    }

  };

  return methods;

}());
