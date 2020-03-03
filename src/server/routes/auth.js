import express from "express";
import passport from "passport";
import requireAuth from "../middleware/requireAuth";
const router = express.Router();

router
  .get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  })
  .get("/api/current_user", (req, res) => {
    // console.log("cookie is: ", req.get("cookie"));
    // console.log("in api current user route");
    // console.log("req user is: ", req.user);
    return res.send(req.user);
  })
  .get("/api/protected", requireAuth, (req, res) => {
    console.log("in protected route");
    console.log(req.user);
    return res.send("secret route");
  })
  .get(
    "/api/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  )
  .get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
    // console.log("google");
    // console.log(req.user);
    //res.send("google auth okay");
    console.log("google auth okay");
    res.redirect("/");
  })
  .get("/api/auth/twitter", passport.authenticate("twitter"))
  .get(
    "/auth/twitter/callback",
    passport.authenticate("twitter"),
    (req, res) => {
      console.log("twitter auth okay");
      res.redirect("/");
    }
  );

export default router;
