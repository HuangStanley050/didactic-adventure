import express from "express";
const router = express.Router();

router
  .get("/api/auth/google", (req, res) => res.send("google auth route"))
  .get("/api/auth/twitter", (req, res) => res.send("twitter auth route"))
  .get("/auth/google/callback", (req, res) =>
    res.send("google auth callback route")
  )
  .get("/auth/twitter/callback", (req, res) =>
    res.send("twitter auth callback route")
  );

export default router;
