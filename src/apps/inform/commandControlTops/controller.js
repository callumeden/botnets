var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var App = require('../../../app');
var appData = require('../../../data/inform/commandControlTops');

require('../../../lib/components/views/subjectPointers');
require('../../../lib/components/views/jumbotron');
require('../../../lib/components/views/featurette');

require('./layout/layout');

var Controller = Marionette.Object.extend({

    initialize: function () {
        this.showLayout();
        this.showArchitectureCommunication();
    },

    showLayout: function () {
        this.layout = App.request('new:commandControlTops:layout');
        this.region = App.getRegion('container');
        this.region.show(this.layout);
    },

    showArchitectureCommunication: function () {

        this.showSubjectPointers({
            region: this.layout.getRegion('subjectPointers'),
            data: appData.subjectPointers
        });

        this.showJumbotron({
            region: this.layout.getRegion('jumbotron'),
            data: appData.jumbotron
        });

        this.showFeaturette({
            region: this.layout.getRegion('featurette'),
            data : appData.featurette
        });

    },

    showSubjectPointers: function (options) {
        var collection = new Backbone.Collection(options.data);
        var view = App.request('new:subjectPointers:view', collection);
        options.region.show(view);

        view.on('childview:details:clicked', this.slideSubjectDetails);
    },

    showJumbotron: function (options) {
        var model = new Backbone.Model(options.data);
        var view = App.request('new:jumbotron:view', model);
        options.region.show(view);
    },

    showFeaturette: function (options) {
        var collection = new Backbone.Collection(options.data);
        var view = App.request('new:featurette:view', collection);
        options.region.show(view);
    },

    slideSubjectDetails: function () {
        console.info('Quality sliding');
    }
});

module.exports = Controller;