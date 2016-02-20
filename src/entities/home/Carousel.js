var Backbone = require('backbone');
var App = require('../../app');

var Slide = Backbone.Model;

var Slides = Backbone.Collection.extend({
    model: Slide
});

App.reqres.setHandler('new:homeCarousel:collection', function (data) {
    return new Slides(data);
});

module.exports = {
    Slides: Slides,
    Slide: Slide
};