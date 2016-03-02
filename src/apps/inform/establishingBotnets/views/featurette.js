var Marionette = require('backbone.marionette');
var App = require('../../../../app');
var template = require('../templates/feature.hbs');
var Handlebars = require('handlebars/runtime');
var infectionPartial = require('../templates/infection.hbs');
var _ = require('underscore');

var Feature = Marionette.ItemView.extend({

    template: template,

    templateHelpers: function () {
        var isPushed = this.isAlternateFormat();

        return {
            isPushed : isPushed
        }
    },

    isAlternateFormat: function () {
        var currentIndex = _.indexOf(this.model.collection.models, this.model);
        return !(currentIndex % 2 == 0);
    }

});

var Featurette = Marionette.CollectionView.extend({

    childView: Feature

});

App.reqres.setHandler('new:featurette:view', function (collection) {
    Handlebars.registerPartial('infection', infectionPartial);

    return new Featurette({collection : collection})
});