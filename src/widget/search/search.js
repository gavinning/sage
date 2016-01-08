/*!
 * search For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-01-08
 */

var app, App;

App = require('app');
app = App.create({
    name: 'search',
    version: '1.0.0',
    template: require('./search.jade'),

    prerender: function(){
        this.find('.btn-soso').click(this.searchHandler);
        this.find('.so-input').on('keypress', this.searchHandler);
    },

    searchHandler: function(e){
        var val;

        if(e.target.tagName === 'INPUT' && e.keyCode === 13){
            val = this.value;
        }
        if(e.target.tagName === 'BUTTON'){
            val = $(this).prev().val();
        }

        if(val){
            location.href = [
                location.origin,
                location.pathname,
                '?s=' + val,
                '#/search'
            ].join('')
        }
    }
});

module.exports = app;
