const express = require("express");
const router = express.Router();
const hobbiesController = require("../controllers/hobby.controller");
const { hobbiesRouteMiddleware, hobbiesGetRouteMiddleware } = require("../middlewares/hobby.middlewares");
const { generateToken, verifyToken } = require('../routes/jwt.routes');
const { body, validationResult } = require('express-validator');


router.use(hobbiesRouteMiddleware);

router.get("/", hobbiesGetRouteMiddleware, hobbiesController.read);
router.post("/", [ body("title").notEmpty() ], hobbiesController.create);
router.put("/:id", hobbiesController.update);
router.delete("/:id", hobbiesController.delete);

router.post('/generate-token', generateToken);
router.post('/verify-token', verifyToken);

module.exports = router;