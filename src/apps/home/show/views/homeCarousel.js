var Marionette = require('backbone.marionette');
var carouselTemplate = require('../templates/carousel.hbs');
var slideTemplate = require('../templates/slide.hbs');
var App = require('../../../../app');
var _ = require('underscore');

var Slide = Marionette.ItemView.extend({
    template: slideTemplate,

    className: 'item',

    onRender: function () {
        this.activateFirst();
    },

    activateFirst: function () {
        var currentIndex = _.indexOf(this.model.collection.models, this.model);

        if (currentIndex == 0) {
            this.$el.addClass('active')
        }
    }

});

var Carousel = Marionette.CompositeView.extend({
    template: carouselTemplate,

    childView: Slide,
    childViewContainer: '[data-role="slide-container"]'
});


App.reqres.setHandler('new:carousel:view', function (collection) {
    return new Carousel({collection: collection});
});

module.exports = {
    Carousel: Carousel,
    Slide: Slide
};