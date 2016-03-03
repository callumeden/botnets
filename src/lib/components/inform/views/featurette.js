var Marionette = require('backbone.marionette');
var App = require('../../../../app');
var template = require('../templates/feature.hbs');
var _ = require('underscore');

var Feature = Marionette.ItemView.extend({

    template: template,

    ui: {
        tooltips: '[data-toggle="tooltip"]'
    },

    templateHelpers: function () {
        var modelIndex = _.indexOf(this.model.collection.models, this.model);

        return {
            isFirst : modelIndex == 0,
            isPushed : !(modelIndex % 2 == 0)
        }
    },

    onRender: function () {
        this.activateTooltips();
    },

    activateTooltips: function () {
        this.bindUIElements();
        this.ui.tooltips.tooltip();//Bootstrap JS method to activate tooltips
    }

});

var Featurette = Marionette.CollectionView.extend({

    childView: Feature

});

App.reqres.setHandler('new:featurette:view', function (collection) {
    return new Featurette({collection : collection})
});