var Marionette = require('backbone.marionette');
var App = require('../../../app');
var template = require('../templates/featurette/feature.hbs');
var _ = require('underscore');
require('./scrollspy');

var Feature = Marionette.ItemView.extend({

    template: template,

    ui: {
        tooltips: '[data-toggle="tooltip"]',
        illegalActivitiesContainer : '[data-role="illegal-activities-container"]'
    },

    events : {
        'click @ui.tooltips' : 'scrollToBottom'
    },

    onShow: function () {
        if (this.model.get('botnetThreats') == true) {
            this.showIllegalActivities();
        }
    },

    showIllegalActivities: function () {
        var view = App.request('new:scrollspy:view', this.model);

        var region = new Marionette.Region({
            el: this.ui.illegalActivitiesContainer
        });

        region.show(view);
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
    },

    scrollToBottom: function () {
        $("html, body").animate({ scrollTop: $('[data-role="footer"]').offset().top - 100 }, "slow");
    }

});

var Featurette = Marionette.CollectionView.extend({

    childView: Feature

});

App.reqres.setHandler('new:featurette:view', function (collection) {
    return new Featurette({collection : collection})
});