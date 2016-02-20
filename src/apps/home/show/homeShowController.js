var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var App = require('../../../app');

require('./layout/layout');
require('./views/homeCarousel');

var HomeShowController = Marionette.Object.extend( {

    initialize: function () {
        this.showLayout();
        this.showHome();
    },

    showLayout: function () {
        this.layout = App.request('new:home:layout');
        this.region = App.getRegion('container');
        this.region.show(this.layout);
    },

    showHome: function () {

        this.showCarousel({
            region: this.layout.getRegion('carousel')
        })

    },

showCarousel: function (options) {
        var Model = Backbone.Model;

        var Collection = Backbone.Collection.extend({
            model: Model
        });

        var collection = new Collection([{}, {}, {}]);

        var view = App.request('new:carousel:view', collection);
        options.region.show(view);
    }

});

module.exports = HomeShowController;