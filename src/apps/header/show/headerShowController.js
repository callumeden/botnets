var App = require('../../../app.js');
var Marionette = require('backbone.marionette');
var _ = require('underscore');

require('./views/header.js');
require('../../../entities/header/links');

var LinksData = require('../../../data/header/links');

var Controller = Marionette.Object.extend({

    initialize: function () {
        this.showHeader({
            region: App.getRegion('header')
        });
    },

    showHeader: function (options) {
        var collection = App.request('new:links:collection', LinksData);
        var view = App.request('new:header:view', collection);
        options.region.show(view);
        this.setNavigationHandlers(view);
    },

    setNavigationHandlers: function (view) {
        view.on('navigate:home', _.bind(this.navigateHome, this));
        view.on('childview:click:link', _.bind(this.handleNavigation, this));
    },

    navigateHome: function () {
        App.execute('show:home');
        this.scrollToTop();
    },

    handleNavigation: function (view) {
        var navigateType = view.ui.navigateLink.data('info');

        switch (navigateType) {
            case "navigate-home" :
                this.navigateHome();
                break;
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
                console.info('Oops.. Something went wrong');
        }

        this.scrollToTop();
    },

    scrollToTop: function () {

        if ($(window).scrollTop() > 250) {
            $("html, body").animate({scrollTop : 0}, "slow");
        }
    }

});

module.exports = Controller;
