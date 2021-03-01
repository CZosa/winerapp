const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      return res.status(200).redirect('/');
    }
  );

  app.get('/login/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
