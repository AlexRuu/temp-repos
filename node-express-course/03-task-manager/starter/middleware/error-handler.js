const { CustomerAPIError } = require("../error/customer-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomerAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "boo" });
};

module.exports = errorHandler;
