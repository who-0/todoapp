const verifyRouer = (req, res, next) => {
  const url = req.url;
  if (
    url === "/" ||
    url === "/users" ||
    url === "/login" ||
    url === "/signup" ||
    url === "/refresh" ||
    url === "/error"
  ) {
    next();
  } else {
    return res.redirect("/error");
  }
};

module.exports = verifyRouer;
