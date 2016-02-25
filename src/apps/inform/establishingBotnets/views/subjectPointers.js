var App = require('../../../../app');
var Marionette = require('backbone.marionette');
var template = require('../templates/pointer.hbs');

var Pointer = Marionette.ItemView.extend({

    template: template,

    ui: {
        details : '[data-role="details"]'
    },

    triggers: {
        'click @ui.details' : 'details:clicked'
    }

});

var Pointers = Marionette.CollectionView.extend({

    childView: Pointer

});

App.reqres.setHandler('new:subjectPointers:view', function (collection) {
   return new Pointers({collection: collection})
});