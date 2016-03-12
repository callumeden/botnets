var App = require('../../app');
var HomeController = require('./show/homeShowController');
var AppRouter = require('../../config/appRouter');

var API = {

    showHome : function () {
        App.navigate('home');
        return new HomeController();
    }
};

var HomeAppRouter = AppRouter.extend({

    routes: {
        '' : 'showHome',
        'home' : 'showHome'
        //'*path' : 'showHome'
    },

    showHome: function () {
        API.showHome();
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
