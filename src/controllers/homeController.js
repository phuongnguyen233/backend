const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};
const getAbc = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  // console.log("email = ", email, "name =", name, "city =", city);
  // let { email, name, city } = req.body;

  // connection.query(
  //   ` INSERT INTO
  //    Users (email, name, city)
  //   VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     // console.log(results);
  //     res.send("Created user succeed!");
  //   }
  // );
  console.log(connection);
  const [results, fields] = await (
    await connection
  ).query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [
    email,
    name,
    city,
  ]);

  res.send("Created user succeed!");
};

module.exports = {
  getHomepage,
  getAbc,
  postCreateUser,
  getCreatePage,
};
