var App = require('../../../app.js');
var Marionette = require('backbone.marionette');
require('./views/header.js');

var Controller = Marionette.Object.extend({

    initialize: function () {
        this.showHeader({
            region: App.getRegion('header')
        });
    },

    showHeader: function (options) {
        var view = App.request('new:header:view');
        options.region.show(view);
        this.setNavigationHandlers(view);
    },

    setNavigationHandlers: function (view) {
        view.on('navigate:home', this.navigateHome);
        view.on('navigate:establishingBotnets', this.navigateEstablishingBotnets);
        view.on('navigate:architectureCommunication', this.navigateArchitectureCommunication);
        view.on('navigate:detection', this.navigateDetection);
        view.on('navigate:ccStructure', this.navigateCcStructure);

    },

    navigateEstablishingBotnets : function () {
        App.execute("show:establishingBotnets");
    },

    navigateArchitectureCommunication: function () {
        App.execute('show:architectureCommunication');
    },

    navigateDetection: function () {
        App.execute('show:detection');
    },

    navigateCcStructure: function () {
        App.execute('show:ccStructure');
    },

    navigateHome: function () {
        App.execute('show:home');
    }

});

module.exports = Controller;
