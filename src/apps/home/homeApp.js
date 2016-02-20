var App = require('../../app.js');
var Marionette = require('backbone.marionette');
var HomeController = require('./show/homeShowController.js');

var HomeApp = Marionette.Object.extend({

    initialize: function () {
        this.showHome();
    },

    showHome : function () {
        return new HomeController();
    }
});

App.commands.setHandler('show:home', function () {
    return new HomeApp();
});

module.exports = HomeApp;
