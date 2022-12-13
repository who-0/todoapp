const httpGetLogout = (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  return res.render("pages/login", { title: "Login" });
};

module.exports = {
  httpGetLogout,
};
