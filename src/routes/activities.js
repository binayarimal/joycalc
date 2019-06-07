const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController.js");
router.get("/activityPage", activityController.actForm);
router.post("/activityPage/create", activityController.createActivity);
router.get("/stat/:id", activityController.stat);
router.get("/allActivities",activityController.allActivities );



module.exports = router;
