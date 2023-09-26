const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "jwt_token";

//Route 1:  Create a User using: POST "/api/auth/register" No login required
router.post(
  "/register",

  async (req, res) => {
    let success = false;

    // Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: success, errors: errors.array() });
    }

    try {
      // Check if the user with the email already exists
      let user = await User.findOne({ Email: req.body.Email });
      if (user) {
        return res.status(400).json({
          message: "User with this email already exists",
          type: "error",
        });
      }

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.Password, salt);

      // Create a new user in the database
      user = await User.create({
        FName: req.body.FName,
        LName: req.body.LName,
        Email: req.body.Email,
        Password: secPass,
        DOB: req.body.DOB,
        Gender: req.body.Gender,
        UserType: req.body.UserType,
        CNIC: req.body.CNIC,
        Phoneno: req.body.Phoneno,
        Address: req.body.Address,
        ProfilePic: req.body.ProfilePic,
        TermsAndConditions: req.body.TermsAndConditions,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      // Json web token for authentication
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;

      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 2:  Authenticator a User using: POST "/api/auth/login" No login required
router.post(
  "/login",

  //Validation errors
  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: success, errors: errors.array() });
    }

    try {
      //Find user in database
      let user = await User.findOne({ Email: req.body.Email });
      if (!user) {
        success = false;
        return res.status(400).json({
          success: success,
          error: "Please enter correct credentials",
        });
      }

      //Compare user's password with password stored on database
      const passwordCompare = await bcrypt.compare(
        req.body.Password,
        user.Password
      );
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success: success,
          error: "Please enter correct credentials",
        });
      }
      //if user exists in database return user data
      const data = {
        user: {
          id: user.id,
        },
      };

      //Json web token for authentication
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: Get logged in User details using: POST "/api/auth/getuser". Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");

    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4: update User details using: PUT "/api/auth//updateuser/:id". Login required
router.put("/updateuser/:id", fetchuser, async (req, res) => {
  try {
    const { FName, LName, DOB, Gender, CNIC, Phoneno, Address, ProfilePic } =
      req.body;

    const updatedUser = {};

    //store property values in object
    if (FName) {
      updatedUser.FName = FName;
    }
    if (LName) {
      updatedUser.LName = LName;
    }
    if (DOB) {
      updatedUser.DOB = DOB;
    }
    if (Gender) {
      updatedUser.Gender = Gender;
    }
    if (CNIC) {
      updatedUser.CNIC = CNIC;
    }
    if (Phoneno) {
      updatedUser.Phoneno = Phoneno;
    }
    if (Address) {
      updatedUser.Address = Address;
    }
    if (ProfilePic) {
      updatedUser.ProfilePic = ProfilePic;
    }

    console.log(updatedUser);

    let user = await User.findById(req.user.id);
    if (!user) {
      return res.json({message:"Not Found", type:"error"});
    }

    //find user by id and update it
    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updatedUser },
      { new: true }
    );

    res.json({ message: "Profile updated successfully.", type: "success" });
    
  } catch (error) {
    console.error(error.message);
    res.json({message:"Internal Server Error"});
  }
});

//Route 5: Delete logged in User using: POST "/api/auth/deleteuser/:id". Login required
router.delete("/deleteuser/:id", fetchuser, async (req, res) => {
  try {
    await User.findOneAndDelete(req.user.id);
    res.json({message:"Account deleted successfully.", type:"success"});

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
