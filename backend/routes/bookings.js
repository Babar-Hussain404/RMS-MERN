const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const Residence = require("../models/Residence");
const Booking = require("../models/Booking");

//Route 1: Get all bookings using: GET "/api/bookings/getallbookings". Login required
router.get("/getallbookings", fetchuser, async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
    console.log(bookings);

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: Add a new booking using: POST "/api/bookings/addbooking". Login required
router.post("/addbooking", fetchuser, async (req, res) => {
  try {
    //if residence does not exist return error
    let residence = await Residence.findById(req.params.id);
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
      ResidentId: req.user.id,
      ResidenceId: residence.id,

      ResidenceName: residence.Name,
      Resident: req.user.Fname + req.user.Lname,
      ResidentPhone: req.user.Phoneno,
      Type: residence.Type,
      Price: residence.Price,
      PriceType: residence.PriceType,
      Date: new Date(),
      Status: "Pending",
    });

    const savedBooking = await booking.save();
    console.log(savedBooking);

    res.json({ message: residence.Type + " Booked successfully" });

    // Catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 3: Update an existing booking using: PUT "/api/bookings/updatebooking". Login required
router.put("/updatebooking/:id", fetchuser, async (req, res) => {
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
      BookingPic,
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
    if (BookingPic) {
      updatedRes.BookingPic = BookingPic;
    }

    //if booking does not exist return error
    let booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).send("Not Found");
    }

    //if unauthorized user accesses the booking retun error
    if (booking.OwnerId.toString() !== req.user.id) {
      {
        return res.status(401).send("Not Allowed");
      }
    }
    //find booking by id and update it
    booking = await Booking.findByIdAndUpdate(
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

//Route 4: Get an existing booking using: Get "/api/bookings/getbooking". Login required
router.get("/getbooking/:id", fetchuser, async (req, res) => {
  try {
    //if booking does not exist return error
    let booking = await Booking.findById(req.params.id);
    console.log(booking);

    if (!booking) {
      return res.status(404).send("Not Found");
    }

    //if unauthorized user accesses the booking retun error
    if (booking.OwnerId.toString() !== req.user.id) {
      {
        return res.status(401).send("Not Allowed");
      }
    }
    res.json({ booking });

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 5: Delete an existing residence using: DELETE "/api/residences/deleteresidence". Login required
router.delete("/deleteresidence/:id", fetchuser, async (req, res) => {
  try {
    console.log(req.params.id);
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

    //find residence by id and delete it
    residence = await Residence.findByIdAndDelete(req.params.id);
    res.json({
      success: "Residence Deleted Successfully",
    });

    //catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
