var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var AppRouter = Marionette.AppRouter.extend({
    execute: function (callback, args) {
        if (!callback) {
            return;
        }

        callback.apply(this, args);
    },

    getCurrentRoute: function () {
        return Backbone.history.fragment;
    }
});

module.exports = AppRouter;
