var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var App = require('../../../app');

require('./layout/layout');
require('./views/homeCarousel');

require('../../../entities/home/carousel');
require('../../../lib/components/views/featurette');

var HomeData = require('../../../data/home/home');

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
            region: this.layout.getRegion('carousel'),
            data : HomeData.carousel
        });

        this.showFeaturette({
            region:  this.layout.getRegion('featurette'),
            data: HomeData.featurette
        });

    },

    showCarousel: function (options) {
        var collection = App.request('new:homeCarousel:collection', options.data);
        var view = App.request('new:carousel:view', collection);
        options.region.show(view);

        view.on('childview:click:cta', this.handleNavigation);
    },

    showFeaturette: function (options) {
        var collection = new Backbone.Collection(options.data);
        var view = App.request('new:featurette:view', collection);
        options.region.show(view);
    },

    handleNavigation: function (view) {
        var ctaType = view.ui.cta.data('info');

        switch (ctaType) {
            case "navigate-establishingBotnets":
                App.execute("show:establishingBotnets");
                break;
            case "navigate-commandControlTops":
                App.execute('show:commandControlTops');
                break;
            case "navigate-communicationProtocols":
                App.execute('show:communicationProtocols');
                break;
            case "navigate-detection":
                App.execute('show:detection');
                break;
            case "navigate-ccStructure":
                App.execute('show:commandControl');
                break;
            default:
                console.info("Oops... Something went wrong");
        }
    }

});

module.exports = HomeShowController;