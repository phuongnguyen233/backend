const Task = require("../models/task");
const aqp = require("api-query-params");
module.exports = {
  postEmptyTask: async (data) => {
    if (data.type === "EMPTY-TASK") {
      let result = await Task.create(data);
      return result;
    }
    return null;
  },
  getTask: async (queryString) => {
    const page = queryString.page;
    const { filter, limit } = aqp(queryString);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Task.find(filter).skip(offset).limit(limit).exec();
    return result;
  },
  removeTask: async (id) => {
    let result = await Task.deleteById(id);
    return result;
  },

  updateTask: async (data) => {
    let result = await Task.updateOne({ _id: data.id }, { ...data });
    return result;
  },
};
