const express = require("express");
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  postCreateArrayCustomers,
  getCustomersAPI,
  putCustomerAPI,
  deleteCustomerAPI,
  deleteManyCustomerAPI,
} = require("../controllers/customerController");
const {
  createEmptyProject,
  getallProjects,
  deleteProject,
  putProjects,
} = require("../controllers/projectController");
const {
  getallTask,
  createTask,
  putTask,
  deleteTask,
} = require("../controllers/taskController");
const routerAPI = express.Router();
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesAPI);
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomers);
routerAPI.get("/customers", getCustomersAPI);
routerAPI.put("/customers", putCustomerAPI);
routerAPI.delete("/customers", deleteCustomerAPI);
routerAPI.delete("/customers-many", deleteManyCustomerAPI);
routerAPI.post("/projects", createEmptyProject);
routerAPI.get("/projects", getallProjects);
routerAPI.delete("/projects", deleteProject);
routerAPI.put("/projects", putProjects);
routerAPI.post("/task", createTask);
routerAPI.get("/task", getallTask);
routerAPI.put("/task", putTask);
routerAPI.delete("/task", deleteTask);

routerAPI.get("/info", (req, res) => {
  console.log(req.query);
  return res.status(200).json({
    data: req.query,
  });
});
routerAPI.get("/info/:name/:address", (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
