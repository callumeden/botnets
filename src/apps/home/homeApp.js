var App = require('../../app');
var HomeController = require('./show/homeShowController');
var AppRouter = require('../../config/appRouter');
var Backbone = require('backbone');

var API = {

    showHome : function () {
        Backbone.history.navigate('home');
        return new HomeController();
    }
};

var HomeAppRouter = AppRouter.extend({

    controller: API,

    appRoutes: {
        '' : 'showHome',
        'home' : 'showHome'
    }

});

App.on('before:start', function () {
    console.info('Home application is initializing...');
    return new HomeAppRouter();
});

App.commands.setHandler('show:home', function () {
    API.showHome();
});

module.exports = {
    API : API,
    HomeAppRouter : HomeAppRouter
};
