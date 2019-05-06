const router = require('koa-router')();
const controller = require('../controller/c-lb')


router.get('/lb', controller.refresh_lb)
// router.post('/lb', controller.refresh_lb)

module.exports = router
