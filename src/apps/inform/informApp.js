var App = require('../../app');
var Backbone = require('backbone');
var AppRouter = require('../../config/appRouter');
var EstablishingBotnetsController = require('./establishingBotnets/controller');
var ArchitectureCommunicationController = require('./architectureCommunication/controller');

var API = {

    showEstablishingBotnets : function () {
        return new EstablishingBotnetsController();
    },

    showArchitectureCommunication: function () {
        return new ArchitectureCommunicationController();
    }
};

var InformAppRouter = AppRouter.extend({

    controller: API,

    appRoutes: {
        'establishing-botnets': 'showEstablishingBotnets',
        'architecture-and-communication': 'showEstablishingBotnets'
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

App.commands.setHandler('show:architectureCommunication', function () {
    API.showArchitectureCommunication();
    Backbone.history.navigate('architecture-and-communication');
});

module.exports = {
    API: API,
    InformAppRouter: InformAppRouter
};

