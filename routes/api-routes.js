const router = require("express").Router();
const db = require("../models/exercise");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Stats()
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json({ err: JSON.stringify(err) });
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.create
    .findByIdAndUpdate(params.id, {
      $push: { exercises: body },
    })
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (/*{ body, params }*/ req, res) => {
  db.create({}, (err, req) => res.json(err ? err : req));
});

module.exports = router;
