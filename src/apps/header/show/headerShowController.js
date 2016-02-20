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
        view.on('navigate:home', this.navigateHome);
        view.on('childview:click:link', _.bind(this.handleNavigation, this));
    },

    navigateHome: function () {
        App.execute('show:home');
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
                console.info('Oops.. Something went wrong');
        }
    }

});

module.exports = Controller;
