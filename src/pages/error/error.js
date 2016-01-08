/*!
 * error For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-page
 * Date: 2016-01-08
 */

var page, Page;

Page = require('page');
page = new Page;
page.extend({
    name: 'error',
    template: require('./error.jade'),

    ajaxconfig: {
        url: '/tmp/test.json',
        dataType: 'json'
    },

    prerender: function(data, thisPage){
        this.exports('header')
    }
});

module.exports = page;
