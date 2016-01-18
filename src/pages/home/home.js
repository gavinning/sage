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
        url: '/g/aimee/api/groups/getLasts,pageNumber=1&pageCounts=12/getRecommends/getMoreDownloads',
        dataType: 'json'
    },

    prerender: function(data, thisPage){
        this.exports('search');

        if(data.code === 0){
            data.getRecommends.title = '推荐';
            data.getLasts.title = '最近更新';
            data.getMoreDownloads.title = '最多下载';
        }

        this.exports('list-landscape', data.getRecommends);
        this.exports('list-landscape', data.getLasts);
        this.exports('list-landscape', data.getMoreDownloads);
    }
});

module.exports = page;
