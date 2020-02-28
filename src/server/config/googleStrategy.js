//var GoogleStrategy = require('passport-google-oauth20').Strategy;
//import google from "passport-google-oauth20/Strategy";
import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //console.log("this is from deserializeUser: ", id);
  done(null, id);
});

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // what to do if I don't want to store user in database??
      let user = {};
      // console.log("inside passport route");
      // console.log(profile);
      user.id = profile.id;
      return done(null, user);
    }
  )
);
