//var GoogleStrategy = require('passport-google-oauth20').Strategy;
import google from "passport-google-oauth20";
import passport from "passport";
const GoogleStragty = google.Strategy;

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // what to do if I don't want to store user in database??
    }
  )
);
