var Marionette = require('backbone.marionette');

var AppRouter = Marionette.AppRouter.extend({
    execute: function (callback, args) {
        if (!callback) {
            return;
        }

        callback.apply(this, args);
    }
});

module.exports = AppRouter;
