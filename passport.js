const GoogleStrategy = require('passport-google-oauth20').Strategy
// const FacebookStrategy = require('passport-facebook').Strategy

const passport = require("passport")

// credentials
const GOOGLE_CLIENT_ID = "224030013822-0p35lkjjklsa9vabus19g3c3ea7npvsh.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

// const FACEBOOK_APP_ID = "1336629413413494";
// const FACEBOOK_APP_SECRET = "608efa9cefd43abd43c68ceee194a6c0";

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
