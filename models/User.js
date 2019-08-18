const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  joindate: Number,
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  birthmonth: String,
  birthday: String,
  birthyear: String,
  city: String,
  state: String,
  zipcode: String,
  country: String,
  school: String,
  work: String,
  languages: String,
  verified: {
    id: Boolean,
    info: Boolean,
    email: Boolean,
    phone: Boolean,
    workemail: Boolean
  },
  superuser: Boolean,
  intro: String,
  image: String,
  homeids: [String], //this is an array of ids that correspond to homes collection - not yet made
  reviews: [String], //this is an array of ids that correspond to reviews collection - not yet made
  references: [String], //this is an array of ids that correspond to references collection - not yet made
  bookedHomes: [String], //this is an array of ids that correspond to booked homes collection - not yet made
  admin: Boolean
});

mongoose.model("users", userSchema);