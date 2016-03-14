var App = require('../../../app');
var Marionette = require('backbone.marionette');
var template = require('../templates/pointer.hbs');

var Pointer = Marionette.ItemView.extend({

    template: template,

    ui: {
        details : '[data-role="details"]',
        tooltips: '[data-toggle="tooltip"]'
    },

    events: {
        'click @ui.tooltips' : 'scrollToBottom',
        'click @ui.details' : 'scrollTo'
    },


    onRender: function () {
        this.activateTooltips();
    },

    activateTooltips: function () {
        this.bindUIElements();
        this.ui.tooltips.tooltip();//Bootstrap JS method to activate tooltips
    },

    scrollToBottom: function () {
        $("html, body").animate({ scrollTop: $('footer').offset().top - 100 }, "slow");
    },

    scrollTo: function (ev) {
        var destination = ev.target.getAttribute('data-destination');
        $("html, body").animate({ scrollTop: $(destination).offset().top - 100}, "slow");
    }
});

var Pointers = Marionette.CollectionView.extend({

    childView: Pointer

});

App.reqres.setHandler('new:subjectPointers:view', function (collection) {
   return new Pointers({collection: collection})
});