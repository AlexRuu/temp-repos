const notFound = (req, res) =>
  res.status(404).send("What ya doing tryna access this page");

module.exports = notFound;
