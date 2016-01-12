/*!
 * article For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-page
 * Date: 2016-01-07
 */

var page, Page, query;

query = require('query');
Page = require('page');
page = new Page;
page.extend({
    name: 'article',
    template: require('./article.jade'),

    ajaxconfig: {
        url: '/g/aimee/api/package',
        dataType: 'json',
        error: function(res){
            aimee.app.tips.getApp().show();
        }
    },

    onload: function(){
        var _query = query.getQuery();

        if(_query.name && _query.version){
            this.ajaxconfig.url += '?' + query.setQuery({name: _query.name, version: _query.version})
        }
    },

    prerender: function(data, thisPage){
        console.log(data)
        this.exports('search info', data);
        this.exports('article', function(app){
            // Render to page
            app.init(data.data).render();
            app.find('.readme').html(data.data.md === 'undefined' ? '' : data.data.md);
        })
    }
});

module.exports = page;
