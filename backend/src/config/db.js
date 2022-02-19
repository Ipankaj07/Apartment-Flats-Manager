/* mongodb+srv://ipankaj07:pankaj123@cluster0.dlrfz.mongodb.net/test */

const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://ipankaj07:pankaj123@cluster0.dlrfz.mongodb.net/flatDetails"
  );
};