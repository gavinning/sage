/*!
 * tips For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-01-08
 */

var app, App;

App = require('app');
app = App.create({
    name: 'tips',
    version: '1.0.0',
    template: require('./tips.jade'),

    prerender: function(){

    }
});

module.exports = app;
