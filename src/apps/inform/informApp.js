var App = require('../../app');
var Backbone = require('backbone');
var AppRouter = require('../../config/appRouter');
var EstablishingBotnetsController = require('./establishingBotnets/establishingBotnetsController');

var API = {

    showEstablishingBotnets : function () {
        return new EstablishingBotnetsController();
    }
};

var InformAppRouter = AppRouter.extend({

    controller: API,

    appRoutes: {
        'establishing-botnets': 'showEstablishingBotnets'
    }

});

App.on('before:start', function () {
    console.info('Inform application is initializing...');
    return new InformAppRouter();
});

App.commands.setHandler('show:establishingBotnets', function () {
    API.showEstablishingBotnets();
    Backbone.history.navigate('establishing-botnets');
});

module.exports = {
    API: API,
    InformAppRouter: InformAppRouter
};

