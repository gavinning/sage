/*!
 * list For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-01-07
 */

var app, App;

App = require('app');
app = App.create({
    name: 'list',
    version: '1.0.0',
    template: require('./list.jade'),

    prerender: function(){

    }
});

module.exports = app;
