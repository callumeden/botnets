var Marionette = require('backbone.marionette');
var App = require('../../../app');

require('./layout/layout');
require('./views/homeCarousel');

require('../../../entities/home/carousel');
var CarouselData = require('../../../data/home/carousel');

var HomeShowController = Marionette.Object.extend({

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
        var collection = App.request('new:homeCarousel:collection', CarouselData);
        var view = App.request('new:carousel:view', collection);
        options.region.show(view);

        view.on('childview:click:cta', this.handleNavigation);
    },

    handleNavigation: function (view) {
        var ctaType = view.ui.cta.data('info');

        switch (ctaType) {
            case "navigate-establishingBotnets":
                App.execute("show:establishingBotnets");
                break;
            case "navigate-architectureCommunication":
                App.execute('show:architectureCommunication');
                break;
            case "navigate-detection":
                App.execute('show:detection');
                break;
            case "navigate-ccStructure":
                App.execute('show:ccStructure');
                break;
            default:
                console.info("Oops... Something went wrong");
        }
    }

});

module.exports = HomeShowController;