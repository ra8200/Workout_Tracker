const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Please Enter Exercise Name",
      },
      type: {
        type: String,
        trim: true,
        required: "Please Enter Exercise Type",
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        require: "Please Enter Exercise Duration",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
const db = { Workout: Workout };
module.exports = Workout;
