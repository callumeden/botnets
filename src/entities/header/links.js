var Backbone = require('backbone');
var App = require('../../app');

var Link = Backbone.Model;

var Links = Backbone.Collection.extend({
    model : Link
});

App.reqres.setHandler('new:links:collection', function (data) {
    return new Links(data);
});

module.exports = {
    Links : Links,
    Link : Link
};