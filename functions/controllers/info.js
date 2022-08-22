const getCurrentData = require("../models/listData");
module.exports = function info(app, opts, next) {
  app.get("/list/info", (req, res) => {
    console.log(req);
    getCurrentData.reverse();
    res.send({
      reversedList: getCurrentData,
      url: req.url,
      length: getCurrentData.length,
      method: req.method,
      time: new Date().toLocaleString(),
    });
  });

  //next
  next();
};
