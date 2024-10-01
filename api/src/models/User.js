const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://anuragd275:FqCC4erlEBNfsx8e@buy-smart-cluster.0ivka.mongodb.net/?retryWrites=true&w=majority&appName=buy-smart-cluster";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB"));

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
