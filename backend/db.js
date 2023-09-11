const mongoose = require('mongoose')
const mongooseURI= 'mongodb+srv://BabarHussain:2M3JVeELCLqksVm1@cluster0.acmam1j.mongodb.net/RMS-MERN'

const connectToMongo = async () => {
   try {
      await mongoose.connect(mongooseURI);
      console.log("Connected to MongoDB successfully!");
   } catch (error) {
      console.error("Error connecting to MongoDB:", error);
   }
}

module.exports = connectToMongo;