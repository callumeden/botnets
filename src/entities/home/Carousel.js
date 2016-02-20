var Backbone = require('backbone');
var App = require('../../app');

var Model = Backbone.Model;

var Collection = Backbone.Collection.extend({
    model: Model
});

App.reqres.setHandler('new:homeCarousel:collection', function (data) {
    return new Collection(data);
});

module.exports = {
    Collection: Collection,
    Model: Model
};