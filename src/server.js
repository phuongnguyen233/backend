require("dotenv").config();
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const fileUpload = require("express-fileupload");
const connection = require("./config/database");
const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;
const { MongoClient } = require('mongodb');

// default options
app.use(fileUpload());

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); //

// khai bao route
// app.use("/v1", webRoutes);
// app.use("/v2", webRoutes);
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

// const cat = new Kitten({ name: "Phuong cat" });
// cat.save();
(async () => {
  //test connection
  try {
    await connection();
    // //using mongodb driver
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);
    // Database Name
    const dbName = process.env.DB_NAME;
    
      // Use connect method to connect to the server
      await client.connect();
      console.log('Connected successfully to server');
      // const db = client.db(dbName);
      // const collection = db.collection('customers');


      // collection.insertOne({
      //   "name": "phuong",
      //   address: {
      //     name: "vietnam",
      //     code: 1000
      //   }
      
      // })
      
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
//config template engine
configViewEngine(app);
