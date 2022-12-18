const verifyRouer = async (req, res, next) => {
  const url = req.url;
  const liID = Number(url.split("/")[2]);
  if (
    url === "/" ||
    url === "/profile" ||
    url === "/refresh" ||
    url === "/login" ||
    url === "/logout" ||
    url === "/signup" ||
    url === "/delete" ||
    liID === Number ||
    url === `/delete/${liID}` ||
    url === "/error"
  ) {
    next();
  } else {
    return res.render("pages/error", {
      title: "Error",
      message: "Your Request is not defined on our system!",
    });
  }
};

module.exports = verifyRouer;
