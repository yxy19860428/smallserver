const Router = require("@koa/router");
const router = new Router();

const home = require("./home");

home(router);

module.exports = router;
