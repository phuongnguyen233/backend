const connection = require("../config/database");
const getAbc = (req, res) => {
  res.send("Hello World! & nodemon");
};
const getHomepage = (req, res) => {
  //cal model
  // simple query
  let user = [];
  connection.query("SELECT * FROM Users u", function (err, results, fields) {
    users = results;
    console.log(">>result=", results); // results contains rows returned by server
    res.send(JSON.stringify(users));
  });
  // res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getAbc,
};
