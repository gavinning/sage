/*!
 * home For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-page
 * Date: 2016-01-07
 */

var page, Page;

Page = require('page');
page = new Page;
page.extend({
    name: 'home',
    template: require('./home.jade'),

    ajaxconfig: {
        url: '/g/aimee/api/getPackages',
        dataType: 'json'
    },

    prerender: function(data, thisPage){
        this.exports('search');
        this.exports('list-landscape', data.data)
    }
});

module.exports = page;
