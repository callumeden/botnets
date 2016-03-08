var App = require('../../app');
var HomeController = require('./show/homeShowController');
var AppRouter = require('../../config/appRouter');
var Backbone = require('backbone');

var API = {

    showHome : function () {
        Backbone.history.navigate('project/2015/163/g1516304/topics/dist/home');
        return new HomeController();
    }
};

var HomeAppRouter = AppRouter.extend({

    controller: API,

    appRoutes: {
        'project/2015/163/g1516304/topics/dist/' : 'showHome',
        'project/2015/163/g1516304/topics/dist/home' : 'showHome'
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
