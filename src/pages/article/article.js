/*!
 * article For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-page
 * Date: 2016-01-07
 */

var page, Page;

Page = require('page');
page = new Page;
page.extend({
    name: 'article',
    template: require('./article.jade'),

    ajaxconfig: {
        url: '/tmp/test.json',
        dataType: 'json'
    },

    prerender: function(data, thisPage){
        this.exports('article')
    }
});

module.exports = page;
