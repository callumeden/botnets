var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var App = new Marionette.Application();

App.addRegions({
    header: '[data-region="header"]',
    container: '[data-region="app-container"]',
    footer: 'footer'
});

App.on('start', function () {

    this.execute('show:header');
    this.execute('show:footer');

    if (Backbone.history) {
        Backbone.history.start({
            root: '/project/2015/163/g1516304/topics/dist/'
        });

    }
});

App.getCurrentRoute = function () {
    return Backbone.history.fragment;
};

App.navigate = function (route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

module.exports = App;