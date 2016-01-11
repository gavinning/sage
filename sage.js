var fs = require('fs');
var path = require('path');
var showdown  = require('showdown');
var Markdown = new showdown.Converter();
var router = system.express.Router();
var User = system.db.User;

// system.app.name
exports.name = 'sage';
exports.router = router;
exports.static = path.join(__dirname, 'static');

router.get('/', function(req, res){
    res.status(200).send('Hello ' + exports.name)
})

router.get('/quickstart', function(req, res){
    var md = Markdown.makeHtml(fs.readFileSync(path.join(__dirname, 'views/quickstart.md'), 'utf-8'));
    res.render(path.join(__dirname, 'views/md'), {md: md})
})
