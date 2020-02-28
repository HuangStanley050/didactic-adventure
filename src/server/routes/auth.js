import express from "express";
import passport from "passport";
const router = express.Router();

router
  .get(
    "/api/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  )
  .get("/api/auth/twitter", (req, res) => {
    // console.log("twitter oauth route");
    // console.log(req.user);
    res.send("twitter auth route");
  })
  .get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
    // console.log("google");
    // console.log(req.user);
    res.send("google auth okay");
  })
  .get("/auth/twitter/callback", (req, res) =>
    res.send("twitter auth callback route")
  );

export default router;
