const express = require("express");
const router = express.Router();
const hobbiesController = require("../controllers/hobby.controller");
const { hobbiesRouteMiddleware, hobbiesGetRouteMiddleware } = require("../middlewares/hobby.middlewares");

router.use(hobbiesRouteMiddleware);

router.get("/", hobbiesGetRouteMiddleware, hobbiesController.read);
router.post("/", hobbiesController.create);
router.put("/", hobbiesController.update);
router.delete("/", hobbiesController.delete);
module.exports = router;