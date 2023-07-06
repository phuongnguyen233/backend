require("dotenv").config();
const express = require("express"); //commonjs
const connection = require("./config/database");
const configViewEngine = require("./config/viewEngine");
const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;

const webRoutes = require("./routes/web");
//config template engine
configViewEngine(app);

// khai bao route
app.use("/v1", webRoutes);
app.use("/v2", webRoutes);
//test connection

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
