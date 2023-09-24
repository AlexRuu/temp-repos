const { BadRequestError } = require("../errors");

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Not available for this account");
  }
  next();
};

module.exports = testUser;
