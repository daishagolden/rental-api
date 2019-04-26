const express = require("express");
const router = express.Router();

router.use("/product", require("./api/productRoutes"));

module.exports = router;