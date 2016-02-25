var App = require('./app');
require('jquery');
require('./vendor/config');

//Sub applications
require('./apps/header/headerApp');
require('./apps/footer/footerApp');
require('./apps/home/homeApp');
require('./apps/inform/informApp');

App.start();
