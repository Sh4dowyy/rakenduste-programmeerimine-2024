const express = require("express");
const router = express.Router();
const hobbiesController = require("../controllers/hobby.controller");
const { hobbiesRouteMiddleware, hobbiesGetRouteMiddleware } = require("../middlewares/hobby.middlewares");
const { generateToken, verifyToken } = require('../routes/jwt.routes');


router.use(hobbiesRouteMiddleware);

router.get("/", hobbiesGetRouteMiddleware, hobbiesController.read);
router.post("/", hobbiesController.create);
router.put("/", hobbiesController.update);
router.delete("/", hobbiesController.delete);

router.post('/generate-token', generateToken);
router.post('/verify-token', verifyToken);

module.exports = router;