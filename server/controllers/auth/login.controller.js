const { getUser } = require("../../models/auth/login.model");

const httpGetUser = async (req, res) => {
    const { email, password } = req.body;
    const user =  await getUser(email);
    return res.status(200).json(user);
}

module.exports = {
    httpGetUser,
}