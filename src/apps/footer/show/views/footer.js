var Marionette = require('backbone.marionette');
var App = require('../../../../app.js');
var template = require('../templates/footer.hbs');

var Footer = Marionette.ItemView.extend({

    ui : {
        toTop: '[data-role="to-top"]'
    },

    template: template,

    events: {
        'click @ui.toTop' : 'scrollToTop'
    },

    scrollToTop: function (ev) {
        ev.preventDefault();
        $("html, body").animate({scrollTop : 0}, "slow");
    }

});

App.reqres.setHandler('new:footer:view', function () {
    return new Footer();
});

module.exports = Footer;
