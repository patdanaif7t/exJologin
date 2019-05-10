var express = require("express");
var router = express.Router();
var user = require("../models/mst_employee");

/* GET login page. */
router.get("/", function(req, res, next) {
  res.render("login.ejs", { error: "ถูก" });
});

// login
router.route("/").post((req, res) => {
  if (req.body.user != "" && req.body.password != "") {
    user
      .findOne({ user: req.body.user })
      .then(users => {
        if (users.password === req.body.password) {
          user.find(function(err, user) {
            // res.send('ถูก')
            res.render("showemployee", { user: users, error: "ถูก" });
          });
        } else {
          // res.send('ไม่ถูก')
          res.render("login", { error: "ไม่ถูก" });
        }
      })
      .catch(err => {
        // res.send('ไม่ถูก')
        res.render("login", { error: "ไม่ถูก" });
      });
  }else {
    res.render("login.ejs", { error: "ถูก" });
  }
});

module.exports = router;
