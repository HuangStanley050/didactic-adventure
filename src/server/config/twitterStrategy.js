import passport from "passport";
const TwitterStrategy = require("passport-twitter").Strategy;

passport.use(
  "twitter",
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/callback",
      proxy: true
    },
    (token, tokenSecret, profile, done) => {
      let user = {};
      user.id = profile.id;
      return done(null, user);
    }
  )
);
