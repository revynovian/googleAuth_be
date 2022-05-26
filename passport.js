const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require("passport")

// credentials
const GOOGLE_CLIENT_ID = "224030013822-0p35lkjjklsa9vabus19g3c3ea7npvsh.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy(
  {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
  },

  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user,done)=> {
  done(null, user)
})
