var App = require('../../app.js');
var Marionette = require('backbone.marionette');
var FooterController = require('./show/footerController.js');

var FooterApp = Marionette.Object.extend({

    initialize: function () {
        this.showFooter();
    },

    showFooter : function () {
        return new FooterController();
    }
});

App.commands.setHandler('show:footer', function () {
    return new FooterApp();
});

module.exports = FooterApp;
