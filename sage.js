var fs = require('fs');
var path = require('path');
var router = system.express.Router();
var User = system.db.User;

// system.app.name
exports.name = 'sage';
exports.router = router;
exports.static = path.join(__dirname, 'static');

router.get('/', function(req, res){
    res.status(200).send('Hello ' + exports.name)
})
