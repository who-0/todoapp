const {addNewUser} = require('../../models/auth/signup.model');
const httpGetSignup = (req, res) => {
    res.render('pages/signup')
}

const httpPostSignup = async (req, res) => {
    const user = req.body;
    const newUser = await addNewUser(user.email,user);
    return res.status(201).json(newUser);
}

module.exports  = {
    httpGetSignup,
    httpPostSignup,
}