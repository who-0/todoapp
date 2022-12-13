const verifyRouer = async (req, res, next) => {
  const url = req.url;
  if (
    url === "/" ||
    url === "/profile" ||
    url === "/refresh" ||
    url === "/login" ||
    url === "/logout" ||
    url === "/signup" ||
    url === "/delete" ||
    url === "/error"
  ) {
    next();
  } else {
    return res.redirect("/error");
  }
};

module.exports = verifyRouer;
