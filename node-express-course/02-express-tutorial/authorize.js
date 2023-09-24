const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "alex") {
    req.user = { name: "alex", id: 18 };
    next();
  } else {
    res.status(401).send("Who dis?");
  }
};

module.exports = authorize;
