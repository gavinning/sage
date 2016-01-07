var fs = require('fs');
var path = require('path');
var pm = require('thenjs');
var router = system.express.Router();
var User = system.db.User;

// system.app.name
exports.name = 'sage';
exports.router = router;
exports.static = path.join(__dirname, 'static');
