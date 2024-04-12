const express = require("express");
const axios = require("axios");
const publicApi = require("../controllers/publicApi.controller");
const router = express.Router();

router.get("/api", publicApi);

module.exports = router;
