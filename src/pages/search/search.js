/*!
 * search For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-page
 * Date: 2016-01-07
 */

var page, Page;
var query = require('query');

Page = require('page');
page = new Page;
page.extend({
    name: 'search',
    template: require('./search.jade'),

    ajaxconfig: {
        url: '/g/aimee/api/search',
        dataType: 'json'
    },

    onload: function(){
        var search;
        var _query = query.getQuery();

        if(_query.s){
            search = query.setQuery({keyword: _query.s, pageNumber: 1, pageCounts: 10});
            this.ajaxconfig.url = [this.ajaxconfig.url, search].join('?')
        }
        else{
            return pm.load();
        }
    },

    prerender: function(data, thisPage){
        this.exports('search');
        
        this.exports('list', function(app){
            app.init(data.data).config({search: true}).render();
        })
    },

    enter: function(){
        if(!query.getQuery().s){
            pm.load();
        }
    }
});

module.exports = page;
