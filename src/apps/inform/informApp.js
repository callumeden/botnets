var App = require('../../app');
var AppRouter = require('../../config/appRouter');
var EstablishingBotnetsController = require('./establishingBotnets/controller');
var ArchitectureCommunicationController = require('./architectureCommunication/controller');
var DetectionController = require('./detection/controller');
var CommandController = require('./commandControl/controller');

var API = {

    showEstablishingBotnets : function () {
        return new EstablishingBotnetsController();
    },

    showArchitectureCommunication: function () {
        return new ArchitectureCommunicationController();
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
        'architecture-and-communication': 'showArchitectureCommunication',
        'detecting-botnets': 'showDetection',
        'command-and-control-structure': 'showCommandControl'
    },

    showEstablishingBotnets: function () {
        API.showEstablishingBotnets();
    },

    showArchitectureCommunication: function () {
        API.showArchitectureCommunication();
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

App.commands.setHandler('show:architectureCommunication', function () {
    API.showArchitectureCommunication();
    App.navigate('architecture-and-communication');
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

