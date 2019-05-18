const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController.js");
router.get("/activityPage", activityController.actForm)

module.exports = router;
