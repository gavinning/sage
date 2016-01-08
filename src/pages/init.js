/*!
 * init.js For sage
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-01-07
 */

var aimee, router;

aimee = require('aimee');
router = require('router');
aimee.config.set('env', 'dev');

aimee
    .reg('zepto')
    .reg('autoscreen')
    .reg('header')
    .reg('tips')

router
    .option('pages/home')
    .option('pages/error')
    .option('pages/search')
    .option('pages/article', '/app')
    .action();
