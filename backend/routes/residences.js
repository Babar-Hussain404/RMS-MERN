const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const Residence = require("../models/Residence");
const Booking = require("../models/Booking");
const Facility = require("../models/Facility");

//Route 1: Get all residences using: GET "/api/residences/getallresidences". Login required
router.get("/getallresidences", fetchuser, async (req, res) => {
  try {
    const residences = await Residence.find({ OwnerId: req.user.id });
    res.json(residences);
    if (residences) {
    }

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: Add a new residence using: POST "/api/residences/addresidence". Login required
router.post("/addresidence", fetchuser, async (req, res) => {
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
});

//Route 3: Update an existing residence using: PUT "/api/residences/updateresidence". Login required
router.put("/updateresidence/:id", fetchuser, async (req, res) => {
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

    const updatedRes = {};
    //store property values in object
    if (Name) {
      updatedRes.Name = Name;
    }
    if (Owner) {
      updatedRes.Owner = Owner;
    }
    if (Type) {
      updatedRes.Type = Type;
    }
    if (Rooms) {
      updatedRes.Rooms = Rooms;
    }
    if (Shared) {
      updatedRes.Shared = Shared;
    }
    if (Price) {
      updatedRes.Price = Price;
    }
    if (PriceType) {
      updatedRes.PriceType = PriceType;
    }
    if (Location) {
      updatedRes.Location = Location;
    }
    if (Email) {
      updatedRes.Email = Email;
    }
    if (Phoneno) {
      updatedRes.Phoneno = Phoneno;
    }
    if (ResidencePic) {
      updatedRes.ResidencePic = ResidencePic;
    }

    //if residence does not exist return error
    let residence = await Residence.findById(req.params.id);
    if (!residence) {
      return res.status(404).send("Not Found");
    }

    //if unauthorized user accesses the residence retun error
    if (residence.OwnerId.toString() !== req.user.id) {
      {
        return res.status(401).send("Not Allowed");
      }
    }
    //find residence by id and update it
    residence = await Residence.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRes },
      { new: true }
    );
    res.json({ message: updatedRes.Type + " Edited successfully" });

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4: Get an existing residence using: Get "/api/residences/getresidence". Login required
router.get("/getresidence/:id", fetchuser, async (req, res) => {
  try {
    //if residence does not exist return error
    let residence = await Residence.findById(req.params.id);

    if (!residence) {
      return res.status(404).send("Not Found");
    }

    //if unauthorized user accesses the residence retun error
    if (residence.OwnerId.toString() !== req.user.id) {
      {
        return res.status(401).send("Not Allowed");
      }
    }
    res.json({ residence });

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 5: Delete an existing residence using: DELETE "/api/residences/deleteresidence". Login required
router.delete("/deleteresidence/:id", fetchuser, async (req, res) => {
  try {
    //if residence does not exist return error
    let residence = await Residence.findById(req.params.id);
    if (!residence) {
      return res.status(404).send("Not Found");
    }

    //if unauthorized user accesses the residence retun error
    if (residence.OwnerId.toString() !== req.user.id) {
      {
        return res.status(401).send("Not Allowed");
      }
    }

    // Delete bookings associated with the residence
    await Booking.deleteMany({ ResidenceId: req.params.id });

    // Delete the residence itself
    residence = await Residence.findByIdAndDelete(req.params.id);
    res.json({
      success: "Residence Deleted Successfully",
      type: "success",
    });

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 6: Get all facilities using: GET "/api/residences/getfacilities". Login required
router.get("/getfacilities", fetchuser, async (req, res) => {
  try {
    const facilities = await Facility.find({});
    res.json(facilities);
    if (facilities) {
    }

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
