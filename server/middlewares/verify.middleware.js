const jwt = require("jsonwebtoken");
const TOKEN_API = process.env.TOKEN_API;
const verifyToken = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.render("pages/login", {
      title: "Login",
      error: "You need to login first.",
      success: null,
    });
  } else {
    try {
      jwt.verify(accessToken, TOKEN_API, (err, data) => {
        if (err) {
          if (err.message === "jwt expired") {
            return res.redirect("/refresh");
          } else {
            return res.render("pages/error", {
              title: "Error",
              message: err.message,
            });
          }
        }
        req.data = data;
        next();
      });
    } catch (error) {
      console.log(error);
      return res.render("pages/error", {
        title: "Error",
        message: err.message,
      });
    }
  }
};

module.exports = verifyToken;
