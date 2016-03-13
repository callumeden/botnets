var App = require('../../app');
var AppRouter = require('../../config/appRouter');
var EstablishingBotnetsController = require('./establishingBotnets/controller');
var CommandControlTopsController = require('./commandControlTops/controller');
var CommunicationProtocolsController = require('./communicationProtocols/controller');
var DetectionController = require('./detection/controller');
var CommandController = require('./commandControl/controller');

var API = {

    showEstablishingBotnets : function () {
        return new EstablishingBotnetsController();
    },

    showCommandControlTops: function () {
        return new CommandControlTopsController();
    },

    showCommunicationProtocols: function () {
        return new CommunicationProtocolsController();
    },

    showDetection: function () {
        return new DetectionController();
    },

    showCommandControl: function () {
        return new CommandController();
    }
};

var InformAppRouter = AppRouter.extend({

    routes: {
        'establishing-botnets': 'showEstablishingBotnets',
        'command-and-control-topologies': 'showCommandControlTops',
        'communication-protocols': 'showCommunicationProtocols',
        'detecting-botnets': 'showDetection',
        'command-and-control-structure': 'showCommandControl'
    },

    showEstablishingBotnets: function () {
        API.showEstablishingBotnets();
    },

    showCommandControlTops: function () {
        API.showCommandControlTops();
    },

    showCommunicationProtocols: function () {
        API.showCommunicationProtocols();
    },

    showDetection : function () {
        API.showDetection();
    },

    showCommandControl: function () {
        API.showCommandControl();
    }

});

App.on('before:start', function () {
    console.info('Inform application is initializing...');
    return new InformAppRouter();
});

App.commands.setHandler('show:establishingBotnets', function () {
    API.showEstablishingBotnets();
    App.navigate('establishing-botnets');
});

App.commands.setHandler('show:commandControlTops', function () {
    API.showCommandControlTops();
    App.navigate('command-and-control-topologies');
});

App.commands.setHandler('show:communicationProtocols', function () {
    API.showCommunicationProtocols();
    App.navigate('communication-protocols');
});

App.commands.setHandler('show:detection', function () {
    API.showDetection();
    App.navigate('detecting-botnets');
});


App.commands.setHandler('show:commandControl', function () {
    API.showCommandControl();
    App.navigate('command-and-control-structure');
});

module.exports = {
    API: API,
    InformAppRouter: InformAppRouter
};

