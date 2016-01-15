/*!
 * markdown For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-01-15
 */

var app, App;

App = require('app');
app = App.create({
    name: 'markdown',
    version: '1.0.0',
    template: require('./markdown.jade'),

    prerender: function(){

    }
});

module.exports = app;
