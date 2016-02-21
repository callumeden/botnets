var Marionette = require('backbone.marionette');
var template = require('../templates/layout.hbs');
var App = require('../../../../app');

var Layout = Marionette.LayoutView.extend({

    template: template

});

App.reqres.setHandler('new:establishingBotnets:layout', function () {
   return new Layout();
});

module.exports = Layout;
