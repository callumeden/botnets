var Marionette = require('backbone.marionette');
var App = require('../../../../app.js');
var template = require('../templates/header.hbs');

var HeaderView = Marionette.ItemView.extend({
    template: template,
    tagName: 'header'
});

App.reqres.setHandler('new:header:view', function () {
    return new HeaderView();
});

module.exports = HeaderView;
