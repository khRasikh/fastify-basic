const getCurrentData = require("../models/listData");

module.exports = function addToList(app, opts, next) {
  app.patch("/list/update", (req, rep) => {
    getCurrentData.push({
      name: "Hamid",
      lastName: "Mohammadi",
      age: 55,
    });
    rep.send({
      success: true,
      status: rep.statusCode,
      newRecords: getCurrentData,
    });
  });

  //keep alive
  next();
};
