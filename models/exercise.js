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
        required: "Please Enter Exercise Duration",
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

function workoutStats() {
  return Workout.aggregate([{ $match: {} }])
    .addFields({
      totalWeight: { $sum: "$exercises.weight" },
      totalDuration: { $sum: "$exercises.Duration" },
    })
    .sort({ day: -1 })
    .limit(7);
}

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = { Workout: Workout, Stats: workoutStats };
