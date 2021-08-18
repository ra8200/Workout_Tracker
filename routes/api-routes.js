const router = require("express").Router();
const db = require("../models/exercise.js");

router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .sort({ day: 1 })
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json({ err: JSON.stringify(err) });
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .sort({ day: -1 })
    .limit(7)
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json({ err: JSON.stringify(err) });
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  if (body.name != "") {
    db.Workout.findByIdAndUpdate(params.id, {
      $push: { exercises: body },
    })
      .then((dbData) => {
        res.json(dbData);
      })
      .catch((err) => {
        res.json(err);
      });
  } else return;
});

router.post("/api/workouts", (/*{ body, params }*/ req, res) => {
  // db.create({}, (err, req) => res.json(err ? err : req));
  db.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
