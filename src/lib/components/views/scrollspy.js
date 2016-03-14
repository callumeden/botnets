var Marionette = require('backbone.marionette');
var App = require('../../../app');
var template = require('../templates/scrollspy.hbs');

var ScrollSpy = Marionette.ItemView.extend({

    template: template,

    ui : {
        contentLink : '[data-role="content-links"] li',
        tooltips: '[data-toggle="tooltip"]'
    },

    events : {
        'click @ui.contentLink' : 'scrollToContent',
        'click @ui.tooltips' : 'scrollToBottom'
    },

    onRender: function () {
        this.activateTooltips();
        this.$el.find('nav').scrollspy('refresh')
    },

    scrollToContent: function (ev) {
        ev.preventDefault();
        var targetId = $(ev.currentTarget).find('a').attr('href');
        var targetEl = this.$el.find(targetId);
        var scrollableEl = this.$el.find('[data-spy="scroll"]');
        scrollableEl.scrollTop(scrollableEl.scrollTop() + targetEl.position().top);
    },

    activateTooltips: function () {
        this.bindUIElements();
        this.ui.tooltips.tooltip();//Bootstrap JS method to activate tooltips
    },

    scrollToBottom: function () {
        $("html, body").animate({ scrollTop: $('[data-role="footer"]').offset().top - 100 }, "slow");
    }

});

App.reqres.setHandler('new:scrollspy:view', function (model) {
    return new ScrollSpy({model : model});
});

module.exports = ScrollSpy;