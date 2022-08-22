const getCurrentData = require("../models/listData");

module.exports = function addToList(app, opts, next) {
  app.post("/list/add", (req, rep) => {
    getCurrentData.push({
      name: "Hamid",
      lastName: "Mohammadi",
      age: 55,
    });
    console.log(rep.statusCode);
    rep.send({ success: true, status: rep.statusCode });
  });

  //keep alive
  next();
};
