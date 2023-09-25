// const connectToMongo = require("./db");
const mongoose = require('mongoose')
const Facility = require('./models/Facility');

// Connect to MongoDB
// connectToMongo(); 

async function initializeFacilities() {
//   await mongoose.connect('mongodb://localhost/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });
  // Check if there is any data in the Facility collection
  const existingFacilities = await Facility.find({});
  if (existingFacilities.length > 0) {
    console.log('Facility collection already contains data. Skipping initialization.');
    return;
  }
  
  const facilitiesData = [
    {
      Name: "TV",
      Icon: "bx bx-tv",
      IsSelected: false
    },    {
        Name : "Wifi",
        Icon : "bx bx-wifi",
        IsSelected: false
    },
    {
        Name : "Fridge",
        Icon : "bx bx-fridge",
        IsSelected: false
    },
    {
        Name : "AC",
        Icon : "fa-regular fa-snowflake",
        IsSelected: false
    },
    {
        Name : "Mess",
        Icon : "bx bx-food-menu",
        IsSelected: false
    },
    {
        Name : "Parking",
        Icon : "bx bxs-parking",
        IsSelected: false
    },
    {
        Name : "Laundry",
        Icon : "bx bxs-washer",
        IsSelected: false
    },
    {
        Name : "Security",
        Icon : "bx bx-cctv",
        IsSelected: false
    },
    {
        Name : "Wheelchair Accessable",
        Icon : "fa-solid fa-wheelchair",
        IsSelected: false
    }
  ];

  try {
    await Facility.insertMany(facilitiesData);
    console.log('Facilities data initialized successfully');
  } catch (error) {
    console.error('Error initializing facilities data:', error);
  } 
  // finally {
  //   mongoose.connection.close();
  // }
}

module.exports = initializeFacilities;
// initializeFacilities();
