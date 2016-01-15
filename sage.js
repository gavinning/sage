var fs = require('fs');
var path = require('path');
var extend = require('aimee-extend');
var showdown  = require('showdown');
var Markdown = new showdown.Converter();
var router = system.express.Router();
var User = system.db.User;
// About Markdown
var MdViews = path.join(__dirname, 'views/md');
var MdLayout = path.join(__dirname, 'views/md/index.jade');
var MdData = {views: MdViews, layout: MdLayout};
// About Header.app
var HeaderData = require('./src/widget/header/header.json.js');

// system.app.name
exports.name = 'sage';
exports.router = router;
exports.static = path.join(__dirname, 'static');

// 首页
router.get('/', function(req, res){
    res.redirect('/static/sage/');
})

// 根据id处理HeaderData，正确高亮导航
function handleHeaderData(Data, id){
    var Data = Data || {};
    var data = extend(true, {}, Data);
    data.nav.forEach(function(item){
        item.id === path.basename(id) ?
            item.selected = true: '';
    })
    return data;
}

// 帮助文档首页
router.get('/doc', function(req, res){
    res.renderMD('index.md', extend(MdData, handleHeaderData(HeaderData, 'doc')));
})
// 帮助文档 By Markdown
router.get('/doc/*', function(req, res){
    var src = req.params[0];
    res.renderMD(src, extend(MdData, handleHeaderData(HeaderData, src)));
})
