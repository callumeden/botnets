var App = require('./app');
require('jquery');
require('./vendor/config');

//Sub applications
require('./apps/header/headerApp');
require('./apps/home/homeApp');

App.start();