import express from "express";
import passport from "passport";
const router = express.Router();

router
  .get("/api/protected", (req, res) => {
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
    res.send("google auth okay");
  })
  .get("/api/auth/twitter", passport.authenticate("twitter"))
  .get(
    "/auth/twitter/callback",
    passport.authenticate("twitter"),
    (req, res) => {
      res.send("twitter auth okay");
    }
  );

export default router;
