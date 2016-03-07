var Marionette = require('backbone.marionette');
var App = require('../../../app');
var template = require('../templates/jumbotron.hbs');

var Jumbotron = Marionette.ItemView.extend({

    template: template

});

App.reqres.setHandler('new:jumbotron:view', function (model) {
   return new Jumbotron({model:model});
});
