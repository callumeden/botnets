var Marionette = require('backbone.marionette');
var template = require('../templates/layout.hbs');
var App = require('../../../../app');

var Layout = Marionette.LayoutView.extend({

    template: template,

    regions: {
        carousel: '[data-region="home-carousel"]',
        featurette: '[data-region="featurette"]'
    }

});

App.reqres.setHandler('new:home:layout', function () {
    return new Layout();
});

module.exports = Layout;