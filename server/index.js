const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('../config/keys');
const PORT = process.env.PORT || 3000;
require('../routes/menuRoutes')(app);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
require('../utils/passport');
require('../routes/authRoutes')(app);

function isUserAuthenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send('Please sign in to view menu');
  }
}

app.get('/menu', isUserAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname + './../public/'));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
