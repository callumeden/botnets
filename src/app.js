var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var App = new Marionette.Application();

App.addRegions({
    header: '[data-region="header"]',
    container: '[data-region="app-container"]'
});

App.on('start', function () {

    if (Backbone.history) {
        Backbone.history.start({
            pushState: true
        });
    }

    App.execute('show:header');
});

module.exports = App;