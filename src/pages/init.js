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
aimee.config.set('env', 'mock');

aimee
    .reg('zepto')
    .reg('autoscreen')
    .reg('header')

router
    .option('pages/home')
    .option('pages/search')
    .option('pages/article')
    .action();
