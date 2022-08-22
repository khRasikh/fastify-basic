const getCurrentData = require("../models/listData");

module.exports = function addToList(app, opts, next) {
  app.delete("/list/delete", (req, rep) => {
    getCurrentData.pop();
    rep.send({
      success: true,
      status: rep.statusCode,
      newRecords: getCurrentData,
    });
  });

  //keep alive
  next();
};
