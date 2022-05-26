const router = require("express").Router();
const passport = require("passport")

const CLIENT_URL = "http://localhost:3000"

// get user data if login is success
router.get("/login/success", (req,res) => {
  if(req.user) {
    // console.log(req.user)
    res.status(200).json({
      success: true,
      message: "success",
      user: req.user,
    })
  }
  
})

router.get("/login/failed", (req,res) => {
  res.status(401).json({
    success: false,
    message: "failed"
  })
})

// terminate login session and redirect to login page
router.get("/logout", (req,res, next) => {
  req.logout((err) => {
    if (err) return next(err); 
    res.redirect(CLIENT_URL);
  });
})

// google auth
router.get("/google", passport.authenticate("google", {scope:["profile"]}));

// if login success redirect to homepage
router.get("/google/callback", passport.authenticate("google", {
  successRedirect: CLIENT_URL+"/home",
  failureRedirect: "/login/failed"

}))

module.exports = router