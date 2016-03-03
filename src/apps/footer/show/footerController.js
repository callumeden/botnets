var App = require('../../../app.js');
var Marionette = require('backbone.marionette');

require('./views/footer');

var Controller = Marionette.Object.extend({

    initialize: function () {
        this.showFooter({
            region: App.getRegion('footer')
        });

    },

    showFooter: function (options) {
        var view = App.request('new:footer:view');
        options.region.show(view);
    }

});

module.exports = Controller;
