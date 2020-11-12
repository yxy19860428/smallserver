const config = require("../config");
const getMethod = require("../config/request");
const http = require("http");
const home = (router) => {

  router.get("/banner", async (ctx) => {
    const res = await getMethod(`${config.host}/banner`);
    const { banners } = JSON.parse(res);
    const list = banners.slice(0, 4).map((item) => ({
      img: item.imageUrl,
      id: item.targetId,
    }));
    ctx.body = {
      code: 200,
      list
    };
  });

  router.get('/hostApplay',async ctx=>{
    const res = await getMethod(`http://localhost:3000/personalized`)
    const data =  JSON.parse(res);
    if(data.code === 200){
      const applay = data.result.slice(0,8).map(item=>({
        id:item.id,
        img:item.picUrl,
        name:item.name
      }))
      ctx.body={
        code:200,
        data:applay
      }
    }else{
      ctx.body={
        code:400,
        mes:'没有相关数据'
      }
    }
  })
};


module.exports = home;
