var Marionette = require('backbone.marionette');
var App = require('../../../../app.js');
var template = require('../templates/footer.hbs');

var Footer = Marionette.ItemView.extend({

    template: template

});

App.reqres.setHandler('new:footer:view', function () {
    return new Footer();
});

module.exports = Footer;
