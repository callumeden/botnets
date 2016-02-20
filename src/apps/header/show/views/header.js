var Marionette = require('backbone.marionette');
var App = require('../../../../app.js');
var template = require('../templates/header.hbs');
var linkTemplate = require('../templates/link.hbs');

var Link = Marionette.ItemView.extend({

    template: linkTemplate,

    ui: {
        navigateLink: '[data-role="navigate-link"]'
    },

    triggers: {
        'click @ui.navigateLink': 'click:link'
    },

    tagName: 'li'
});

var HeaderView = Marionette.CompositeView.extend({
    template: template,
    tagName: 'header',

    ui: {
        title: '[data-role = "navigate-home"]'
    },

    triggers: {
        'click @ui.title': 'navigate:home'
    },

    childView: Link,
    childViewContainer: '[data-role="links-container"]'

});

App.reqres.setHandler('new:header:view', function (collection) {
    return new HeaderView({collection: collection});
});

module.exports = HeaderView;
