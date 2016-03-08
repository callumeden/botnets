var App = require('../../app');
var Backbone = require('backbone');
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

    controller: API,

    appRoutes: {
        'project/2015/163/g1516304/topics/dist/establishing-botnets': 'showEstablishingBotnets',
        'project/2015/163/g1516304/topics/dist/architecture-and-communication': 'showArchitectureCommunication',
        'project/2015/163/g1516304/topics/dist/detecting-botnets': 'showDetection',
        'project/2015/163/g1516304/topics/dist/command-and-control-structure': 'showCommandControl'
    }

});

App.on('before:start', function () {
    console.info('Inform application is initializing...');
    return new InformAppRouter();
});

App.commands.setHandler('show:establishingBotnets', function () {
    API.showEstablishingBotnets();
    Backbone.history.navigate('project/2015/163/g1516304/topics/dist/establishing-botnets');
});

App.commands.setHandler('show:architectureCommunication', function () {
    API.showArchitectureCommunication();
    Backbone.history.navigate('project/2015/163/g1516304/topics/dist/architecture-and-communication');
});

App.commands.setHandler('show:detection', function () {
    API.showDetection();
    Backbone.history.navigate('project/2015/163/g1516304/topics/dist/detecting-botnets');
});


App.commands.setHandler('show:commandControl', function () {
    API.showCommandControl();
    Backbone.history.navigate('project/2015/163/g1516304/topics/dist/command-and-control-structure');
});

module.exports = {
    API: API,
    InformAppRouter: InformAppRouter
};

