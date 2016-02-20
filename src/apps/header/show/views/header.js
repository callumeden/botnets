var Marionette = require('backbone.marionette');
var App = require('../../../../app.js');
var template = require('../templates/header.hbs');

var HeaderView = Marionette.ItemView.extend({
    template: template,
    tagName: 'header',

    ui: {
        home: '[data-role = "navigate-home"]',
        establishingBotnets: '[data-role="navigate-establishingBotnets"]',
        architectureCommunication: '[data-role="navigate-architectureCommunication"]',
        detection: '[data-role="navigate-detection"]',
        ccStructure: '[data-role="navigate=ccStructure"]'
    },

    triggers: {
        'click @ui.home' : 'navigate:home',
        'click @ui.establishingBotnets' : 'navigate:establishingBotnets',
        'click @ui.architectureCommunication' : 'navigate:architectureCommunication',
        'click @ui.detection' : 'navigate:detection',
        'click @ui.ccStructure' : 'navigate:ccStructure'
    }

});

App.reqres.setHandler('new:header:view', function () {
    return new HeaderView();
});

module.exports = HeaderView;
