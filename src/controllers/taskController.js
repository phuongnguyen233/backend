const {
  postEmptyTask,
  getTask,
  removeTask,
  updateTask,
} = require("../services/taskService");
module.exports = {
  createTask: async (req, res) => {
    let result = await postEmptyTask(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  getallTask: async (req, res) => {
    let result = await getTask(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteTask: async (req, res) => {
    let id = req.body.id;
    let result = await removeTask(id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  putTask: async (req, res) => {
    let result = await updateTask(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
