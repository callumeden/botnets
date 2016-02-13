var App = require('../../../app.js');
var Marionette = require('backbone.marionette');
require('./views/header.js');

var Controller = Marionette.Object.extend({

    initialize: function () {
        this.show({
            region: App.getRegion('header')
        });
    },

    show: function (options) {
        this.headerView = App.request('new:header:view');
        options.region.show(this.headerView)
    }

});

module.exports = Controller;
