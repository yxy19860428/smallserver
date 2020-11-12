const http = require("http");
const getMethod = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      const { statusCode } = res;
      if (statusCode === 200) {
        res.on("data", (chunk) => {
          resolve(chunk.toString());
        });
        res.on("end", () => {
          reject("响应中已无数据");
        });
      }else{
        reject('没有数据')
      }
    });
  });
};

module.exports = getMethod;
