const express = require("express");
const { getSingleUser,getAllUsers } = require("../controllers/user.js")
const {checkUserExist }  =require("../middlewares/database/databaseErrorHelpers.js");
const User = require("../models/User.js")
const userQueryMiddleware = require("../middlewares/query/userQueryMiddleware")

const router = express.Router();
router.get("/",userQueryMiddleware(User),getAllUsers);

router.get("/:id",checkUserExist,getSingleUser); //express sayesinde id otomatik gelecek

module.exports = router;