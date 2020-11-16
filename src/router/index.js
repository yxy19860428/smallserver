const Router = require("@koa/router");
const router = new Router();
const saveData = require('./saveData')
const home = require("./home");

home(router);

saveData(router)

module.exports = router;
