const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const db = require('../database/index');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, { id: id });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'https://www.winer.life/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = 'SELECT googleid FROM users WHERE googleid = $1';
      const currentUser = await db.query(existingUser, [profile.id]);

      if (currentUser.rows.length === 0) {
        db.query('INSERT INTO users (googleid, name) VALUES ($1, $2);', [
          profile.id,
          profile.displayName,
        ]);
        done(null, profile);
      } else {
        done(null, profile.id);
      }
    }
  )
);
