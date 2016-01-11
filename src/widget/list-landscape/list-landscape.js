/*!
 * list-landscape For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-01-11
 */

var app, App;

App = require('app');
app = App.create({
    name: 'list-landscape',
    version: '1.0.0',
    template: require('./list-landscape.jade'),

    prerender: function(){

    }
});

module.exports = app;
