const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getallCustomer,
  putUpdateCustomer,
  deleteCustomer,
  deleteManyCustomer,
} = require("../services/customerService");
const Joi = require("joi");

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      address: Joi.string(),
      phone: Joi.string().pattern(new RegExp("^[0-9]{8,11}$")),
      email: Join.string().email(),
      description: Joi.string(),
    });
    const error = schema.validate(req.body);
    if (error) {
      // return error
    } else {
      let imageUrl = "";
      if (!req.files || Object.keys(req.files).length === 0) {
      } else {
        let result = await uploadSingleFile(req.files.image);
        imageUrl = result.path;
      }
      let customerData = {
        name,
        address,
        phone,
        email,
        description,
        image: imageUrl,
      };
      let customer = await createCustomerService(customerData);
      return res.status(200).json({
        EC: 0,
        data: customer,
      });
    }
  },

  postCreateArrayCustomers: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  },
  getCustomersAPI: async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let name = req.query.name;
    let customers = null;
    if (limit && page) {
      customers = await getallCustomer(limit, page, name, req.query);
    } else customers = await getallCustomer();
    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  },
  putCustomerAPI: async (req, res) => {
    let { id, name, address, email } = req.body;
    let customers = await putUpdateCustomer(id, name, address, email);
    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  },
  deleteCustomerAPI: async (req, res) => {
    let id = req.body.id;
    let customers = await deleteCustomer(id);

    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  },
  deleteManyCustomerAPI: async (req, res) => {
    let ids = req.body.customersId;
    let customers = await deleteManyCustomer(ids);
    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  },
};
