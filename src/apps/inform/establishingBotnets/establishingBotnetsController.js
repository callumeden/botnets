var Marionette = require('backbone.marionette');
var App = require('../../../app');

require('./layout/layout');

var Controller = Marionette.Object.extend({

    initialize: function () {
        this.showLayout();
        this.showEstablishingBotnets();
    },

    showLayout: function () {
        this.layout = App.request('new:establishingBotnets:layout');
        this.region = App.getRegion('container');
        this.region.show(this.layout);
    },

    showEstablishingBotnets: function () {

    }
});

module.exports = Controller;