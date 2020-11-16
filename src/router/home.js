const query = require("../mysql/query");
const home = (router) => {
  router.get("/banner", async (ctx) => {
    const res = await query("select * from banner");
    ctx.body = {
      code: 200,
      list:res,
    };
  });
  router.get('/hostApplay',async ctx=>{
    const res = await query("select * from apply");
    ctx.body = {
      code: 200,
      data:res
    };
  })
};

module.exports = home;
