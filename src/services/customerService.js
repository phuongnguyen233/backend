const Customer = require("../models/customer");
const aqp = require('api-query-params') ;
const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
      
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getallCustomer = async (limit, page, name, queryString) => {
  try {
    let customers = null;
    if (limit && page) {
      let offset = (page - 1) * limit; 
      const { filter} = aqp(queryString);
      delete filter.page;
     customers = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      customers = await Customer.find({});
    }
    return customers;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const putUpdateCustomer = async (id, name, email, address) => {
  try {
    let result = await Customer.updateOne(
      { _id: id },
      { name, email, address }
    );
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const deleteCustomer = async (id) => {
  try {
    let result = await Customer.deleteById(id);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const deleteManyCustomer = async (ids) => {
  try {
    let result = await Customer.delete({
      _id: { $in: ids },
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getallCustomer,
  putUpdateCustomer,
  deleteCustomer,
  deleteManyCustomer,
};
