/*!
 * info For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-01-11
 */

var app, App;

App = require('app');
app = App.create({
    name: 'info',
    version: '1.0.0',
    template: require('./info.jade'),

    prerender: function(){

    }
});

module.exports = app;
