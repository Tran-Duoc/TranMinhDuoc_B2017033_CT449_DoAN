const userModel = require("../models/userModel");

const userController = {
  registerUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(401).json({
          success: false,
          message: "Invalid email",
        });
      }
      const findEmail = await userModel.findOne({ email: email });
      if (findEmail) {
        return res.status(401).json({
          success: false,
          message: "User already registered",
        });
      }

      const newAccount = new userModel({
        email: email,
        password: password,
      });

      await newAccount.save();
      return res.status(200).json({
        success: true,
        message: "User register successfully",
        newAccount: newAccount,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "User registration failed",
      });
    }
  },
};

module.exports = userController;
