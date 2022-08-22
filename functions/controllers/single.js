const getCurrentData = require("../models/listData");
module.exports = function info(app, opts, next) {
  app.get("/list/:id", (req, res) => {
    const getName = req.params.id;

    const status = getCurrentData.find((i) => (i.name = getName));
    console.log(status);
    res.send({
      status: status,
      time: new Date().toLocaleString(),
    });
  });

  //next
  next();
};
