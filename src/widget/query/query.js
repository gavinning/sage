var query = {};
var search = location.search.slice(1);
module.exports = query;

query.getQuery = function(){
    var arr = search.split('&');
    var __query = {};

    arr.forEach(function(item){
        var itemArr = item.split('=');
        itemArr[0] ? __query[itemArr[0]] = itemArr[1] : '';
    })

    return __query;
}

query.setQuery = function(obj){
    var __query = [];

    $.each(obj, function(key, value){
        __query.push([key, value].join('='))
    })

    return __query.join('&')
}
