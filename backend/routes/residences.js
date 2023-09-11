const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const Residence = require("../models/Residence");

//Route 1: Get all residences using: GET "/api/residences/getallresidences". Login required
router.get("/getallresidences", fetchuser, async (req, res) => {
  try {
    const residences = await Residence.find({ OwnerId: req.user.id });
    res.json(residences);
    console.log(residences);
    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: Add a new residence using: POST "/api/residences/addresidence". Login required
router.post(
  "/addresidence",
  fetchuser,
  [
    // Validations
    body("Name", "Enter a valid Name").isLength({ min: 3 }),
    body("Owner", "Enter a valid Owner").isLength({ min: 3 }),
    body("Type", "Enter a valid Type").isLength({ min: 3 }),
    body("Rooms", "Enter a valid number of Rooms")
      .isNumeric()
      .toInt()
      .isInt({ min: 1 }),
    body("Shared", "Enter a valid Shared option").isLength({ min: 1 }),
    body("Price", "Enter a valid Price").isNumeric().toInt().isInt({ min: 1 }),
    body("PriceType", "Enter a valid Price Type").isLength({ min: 1 }),
    body("Location", "Enter a valid Location").isLength({ min: 5, max: 50 }),
    body("Email", "Enter a valid Email").isEmail(),
    body("Phoneno", "Enter a valid Phone Number").matches(/^[0-9]{11}$/),
    body("ResidencePic", "Enter a valid Residence Image URL").isLength({
      min: 5,
      max: 50,
    }),
  ],

  async (req, res) => {
    try {
      const {
        Name,
        Owner,
        Type,
        Rooms,
        Shared,
        Price,
        PriceType,
        Location,
        Email,
        Phoneno,
        ResidencePic,
      } = req.body;

      // Validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Create new residence in the database
      const residence = new Residence({
        OwnerId: req.user.id,
        Name,
        Owner,
        Type,
        Rooms,
        Shared,
        Price,
        PriceType,
        Location,
        Email,
        Phoneno,
        ResidencePic,
      });

      const savedResidence = await residence.save();

      res.json(savedResidence);

      // Catch errors
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: Update an existing residence using: PUT "/api/residences/updateresidence". Login required
router.put("/updateresidence/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    const newNote = {};
    //store property values in object
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //if residence does not exist return error
    let residence = await Residence.findById(req.params.id);
    if (!residence) {
      return res.status(404).send("Not Found");
    }

    //if unauthorized user accesses the residence retun error
    if (residence.user.toString() !== req.user.id) {
      {
        return res.status(401).send("Not Allowed");
      }
    }
    //find residence by id and update it
    residence = await Residence.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ residence });

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4: Delete an existing residence using: DELETE "/api/residences/deleteresidence". Login required
router.delete("/deleteresidence/:id", fetchuser, async (req, res) => {
  try {
    //if residence does not exist return error
    let residence = await Residence.findById(req.params.id);
    if (!residence) {
      return res.status(404).send("Not Found");
    }

    //if unauthorized user accesses the residence retun error
    if (residence.user.toString() !== req.user.id) {
      {
        return res.status(401).send("Not Allowed");
      }
    }

    //find residence by id and delete it
    residence = await Residence.findByIdAndDelete(req.params.id);
    res.json({
      success: "Residence Deleted Successfully",
      residence: residence,
    });

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
