let express = require("express");
const router = express.Router();
let UserController = require("../controllers/UserController");

router.get("/:id", UserController.getUsers);

module.exports = router;
