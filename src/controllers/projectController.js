const {
  postEmptyProject,
  getProjects,
  removeProjects,
  updateProjects,
} = require("../services/productService");
module.exports = {
  createEmptyProject: async (req, res) => {
    let result = await postEmptyProject(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  getallProjects: async (req, res) => {
    let result = await getProjects(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteProject: async (req, res) => {
    let id = req.body.id;
    let result = await removeProjects(id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  putProjects: async (req, res) => {
    let { id, name, endDate, description } = req.body;
    let result = await updateProjects(id, name, endDate, description);
    console.log(result);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
