const myData = require("../models/listData");
module.exports = function list(app, options, next) {
  app.get("/list", (req, rep) => {
    rep.code(200).send({
      success: true,
      message: "You have called list function. Thank you.",
    });
  });
  //keep the server alive
  app.get("/list/data", (req, rep) => {
    const data = myData;
    const getNamesOnly = [];

    data.forEach((element) => {
      getNamesOnly.push(element.name);
    });

    rep.send({
      success: true,
      numberOfPeople: getNamesOnly.length,
      names: getNamesOnly,
    });
  });
  next();
};
