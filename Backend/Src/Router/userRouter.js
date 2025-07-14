const {Router} = require("express");
const { Registration, Login, Logout } = require("../Controller/userController");

const AuthRoute=Router();

AuthRoute.post('/register', Registration);
AuthRoute.post('/login', Login);
AuthRoute.post('/logout', Logout);

module.exports=AuthRoute;