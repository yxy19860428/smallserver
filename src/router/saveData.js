const getMethod = require("../config/request");
const config = require("../config");
const query = require("../mysql/query");
const saveData = (router) => {
  router.get("/save", async (ctx) => {
    const res = await getMethod(`${config.host}/personalized`);
    let data = JSON.parse(res);
    console.log(data);
    if (data.code === 200) {
      let dataArray = data.result.map((item, index) => {
        if (item.id === 0) {
          return;
        } else {
          return {
            id: item.id,
            img: item.picUrl,
            name:item.name
          };
        }
      });

      for (let index = 0; index < dataArray.length; index++) {
        if (dataArray[index] === undefined) {
          dataArray.splice(index, 1);
          index = index - 1;
        }
      }

    for (let index = 0; index < dataArray.length; index++) {
      await query(`INSERT INTO apply (id,img,name) VALUES 
      ("${dataArray[index].id}","${dataArray[index].img}","${dataArray[index].name}")`)
    }
    }
  });
};

module.exports = saveData;
