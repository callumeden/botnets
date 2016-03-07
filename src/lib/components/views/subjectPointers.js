var App = require('../../../app');
var Marionette = require('backbone.marionette');
var template = require('../templates/pointer.hbs');

var Pointer = Marionette.ItemView.extend({

    template: template,

    ui: {
        details : '[data-role="details"]'
    },

    events: {
        'click @ui.details' : 'scrollTo'
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