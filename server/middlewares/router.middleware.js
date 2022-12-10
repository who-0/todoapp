const verifyRouer = (req, res, next) => {
  const url = req.url;
  if (
    url === "/" ||
    url === "/users" ||
    url === "/users/:id" ||
    url === "/login" ||
    url === "/signup" ||
    url === "/refresh" ||
    url === "/error"
  ) {
    next();
  } else {
    console.log("this is router verify");
    return res.redirect("/error");
  }
};

module.exports = verifyRouer;
