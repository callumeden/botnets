var App = require('../../app.js');
var Marionette = require('backbone.marionette');
var HeaderController = require('./show/headerShowController.js');

var HeaderApp = Marionette.Object.extend({

    initialize: function () {
        this.showHeader();
    },

    showHeader : function () {
        return new HeaderController();
    }
});

App.commands.setHandler('show:header', function () {
    return new HeaderApp();
});

module.exports = HeaderApp;
