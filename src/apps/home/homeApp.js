var App = require('../../app.js');
var HomeController = require('./show/homeShowController.js');
var AppRouter = require('../../config/appRouter.js');
var Backbone = require('backbone');

var API = {

    showHome : function () {
        return new HomeController();
    }
};

var HomeAppRouter = AppRouter.extend({

    controller: API,

    appRoutes: {
        'home' : 'showHome'
    }

});

App.on('before:start', function () {
    console.info('Home application is initializing...');
    return new HomeAppRouter();
});

App.commands.setHandler('show:home', function () {
    API.showHome();
    Backbone.history.navigate('home');
});

module.exports = {
    API : API,
    HomeAppRouter : HomeAppRouter
};
