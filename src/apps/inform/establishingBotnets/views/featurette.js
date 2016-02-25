var Marionette = require('backbone.marionette');
var App = require('../../../../app');
var template = require('../templates/feature.hbs');

var Feature = Marionette.ItemView.extend({

    template: template

});

var Featurette = Marionette.CollectionView.extend({

    childView: Feature

});

App.reqres.setHandler('new:featurette:view', function (collection) {
    return new Featurette({collection : collection})
});