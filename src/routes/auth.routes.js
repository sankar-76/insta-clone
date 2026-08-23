const express = require('express');
const authController = require("../controllers/auth.controller")

const authRouter = express.Router()

/** 
 * POST/API/AUTH/REGISTER    // THIS IS PREFIX
 */

authRouter.post('/register',authController.registeredController)

  /***
   * username and
   * password
   * 
   * gamil and 
   * password
   */
    /**
     * {username:a,email:undefind,password:test} == req.body
     */

  authRouter.post('/login', authController.loginController)

  module.exports = authRouter