const { Signup, Login } = require("../Controllers/AuthController");

const router = require("express").Router();

router.post("/signup", (req, res) => {
  console.log("Signup route hit");
  res.send("Route working");
});
router.post("/login", Login);

module.exports = router;