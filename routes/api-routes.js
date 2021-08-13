const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.find()
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.find()
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.findByIdAndUpdate, { $push: { exercises: body } })
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
