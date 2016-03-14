var Marionette = require('backbone.marionette');
var template = require('../templates/layout.hbs');
var App = require('../../../../app');

var Layout = Marionette.LayoutView.extend({

    template: template,

    regions: {
        preamble: '[data-region="preamble"]',
        subjectPointers: '[data-region="subject-pointers"]',
        jumbotron: '[data-region="jumbotron"]',
        featurette : '[data-region="featurette"]'
    }

});

App.reqres.setHandler('new:commandControl:layout', function () {
    return new Layout();
});

module.exports = Layout;
