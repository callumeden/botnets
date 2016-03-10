var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({

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
