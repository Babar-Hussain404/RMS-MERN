const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const Residence = require("../models/Residence");
const Booking = require("../models/Booking");
const User = require("../models/User");

//Route 1: Get all bookings using: GET "/api/bookings/getallbookings". Login required
router.get("/getallbookings", fetchuser, async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: Add a new booking using: POST "/api/bookings/addbooking". Login required
router.post("/addbooking/:id", fetchuser, async (req, res) => {
  try {
    //if residence does not exist return error
    let residence = await Residence.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.json({
        message: "Login to book the residence.",
        type: "error",
      });
    }

    const bookingExists = await Booking.findOne({
      ResidenceId: req.params.id,
      ResidentId: req.user.id,
    });

    if (bookingExists) {
      return res.json({
        message: "You have already booked this residence.",
        type: "error",
      });
    }

    if (!residence) {
      return res.status(404).send("Not Found");
    }

    // Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create new booking in the database
    const booking = new Booking({
      OwnerId: residence.OwnerId,
      ResidentId: user.id,
      ResidenceId: residence.id,

      ResidenceName: residence.Name,
      Resident: user.FName + " " + user.LName,
      ResidentPhone: user.Phoneno,
      Type: residence.Type,
      Price: residence.Price,
      PriceType: residence.PriceType,
      Date: new Date(),
      Status: "Pending",
    });

    const savedBooking = await booking.save();
    if (savedBooking) {
    }
    res.json({
      message: residence.Type + " Booked successfully",
      type: "success",
    });

    // Catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 3: Update an existing booking using: PUT "/api/bookings/updatebooking". Login required
router.put("/updatebooking/:id", fetchuser, async (req, res) => {
  try {
    const { Status } = req.body;
    const updatedBooking = {};

    //store property values in object
    if (Status === "Approved") {
      updatedBooking.Status = Status;
    }
    if (Status === "Rejected") {
      updatedBooking.Status = Status;
    }

    //if booking does not exist return error
    let booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).send("Not Found");
    }

    //find booking by id and update it
    booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: updatedBooking },
      { new: true }
    );
    res.json({
      message: " Booking " + Status + " Successfully",
      type: "success",
    });

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 5: Delete an existing residence using: DELETE "/api/bookings/deletebooking/:id". Login required
router.delete("/deletebooking/:id", fetchuser, async (req, res) => {
  try {
    //find residence by id and delete it
    const residence = await Booking.findByIdAndDelete(req.params.id);

    res.json({
      message: residence.Type + " Booking Deleted Successfully",
      type: "success",
    });

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
