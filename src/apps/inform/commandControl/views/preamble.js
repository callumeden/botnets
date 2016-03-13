var Marionette = require('backbone.marionette');
var App = require('../../../../app');
var template = require('../templates/preamble.hbs');

var Preamble = Marionette.ItemView.extend({

    template: template,

    ui: {
        tooltips: '[data-toggle="tooltip"]'
    },

    events : {
        'click @ui.tooltips' : 'scrollToBottom'
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
    }


});

App.reqres.setHandler('new:preamble:view', function () {
    return new Preamble();
});

module.exports = Preamble;